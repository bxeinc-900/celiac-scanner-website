export const onRequestPost: PagesFunction<{ ANALYTICS_KV: KVNamespace }> = async (context) => {
  try {
    const data = await context.request.json();
    const { timestamp, page, buttonText, destination, type } = data;

    // Get YYYY-MM-DD date string from client timestamp or fallback to UTC today
    let dateStr = new Date().toISOString().split('T')[0];
    if (timestamp) {
      try {
        const parsedDate = new Date(timestamp);
        if (!isNaN(parsedDate.getTime())) {
          const year = parsedDate.getFullYear();
          const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
          const day = String(parsedDate.getDate()).padStart(2, '0');
          dateStr = `${year}-${month}-${day}`;
        }
      } catch (e) {
        console.error("Failed to parse client timestamp for daily stats:", e.message);
      }
    }

    // Handle Pageview Tracking
    if (type === "pageview") {
      // 1. Increment view count for this specific page path
      const pageKey = `count:pageview:${page}`;
      const currentPageCountStr = await context.env.ANALYTICS_KV.get(pageKey);
      const currentPageCount = currentPageCountStr ? parseInt(currentPageCountStr, 10) : 0;
      const newPageCount = currentPageCount + 1;
      await context.env.ANALYTICS_KV.put(pageKey, newPageCount.toString());

      // 2. Increment overall total pageviews
      const totalKey = "count:total_pageviews";
      const totalCountStr = await context.env.ANALYTICS_KV.get(totalKey);
      const totalCount = totalCountStr ? parseInt(totalCountStr, 10) : 0;
      const newTotalCount = totalCount + 1;
      await context.env.ANALYTICS_KV.put(totalKey, newTotalCount.toString());

      // 3. Increment daily total pageviews for YYYY-MM-DD
      const dailyKey = `count:traffic:date:${dateStr}`;
      const dailyCountStr = await context.env.ANALYTICS_KV.get(dailyKey);
      const dailyCount = dailyCountStr ? parseInt(dailyCountStr, 10) : 0;
      const newDailyCount = dailyCount + 1;
      await context.env.ANALYTICS_KV.put(dailyKey, newDailyCount.toString());

      // 4. Append to a rolling list of the latest 100 page view events
      const latestViewsStr = await context.env.ANALYTICS_KV.get("latest_views");
      const latestViews = latestViewsStr ? JSON.parse(latestViewsStr) : [];
      
      latestViews.unshift({ timestamp, page });
      
      if (latestViews.length > 100) {
        latestViews.pop();
      }
      
      await context.env.ANALYTICS_KV.put("latest_views", JSON.stringify(latestViews));

      console.log(`[Edge Analytics] Logged pageview for "${page}". Total pageviews: ${newTotalCount}`);
      
      return new Response(JSON.stringify({ success: true, totalPageviews: newTotalCount, dailyPageviews: newDailyCount }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Default: Handle Outbound App Store Click Tracking
    if (!buttonText) {
      return new Response(JSON.stringify({ error: "Missing buttonText" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Increment total click count for this specific button
    const counterKey = `count:${buttonText}`;
    const currentCountStr = await context.env.ANALYTICS_KV.get(counterKey);
    const currentCount = currentCountStr ? parseInt(currentCountStr, 10) : 0;
    const newCount = currentCount + 1;
    await context.env.ANALYTICS_KV.put(counterKey, newCount.toString());

    // 2. Increment daily click count for YYYY-MM-DD
    const dailyClickKey = `count:clicks:date:${dateStr}`;
    const dailyClickCountStr = await context.env.ANALYTICS_KV.get(dailyClickKey);
    const dailyClickCount = dailyClickCountStr ? parseInt(dailyClickCountStr, 10) : 0;
    const newDailyClickCount = dailyClickCount + 1;
    await context.env.ANALYTICS_KV.put(dailyClickKey, newDailyClickCount.toString());

    // 3. Append to a rolling list of the latest 100 click events
    const latestClicksStr = await context.env.ANALYTICS_KV.get("latest_clicks");
    const latestClicks = latestClicksStr ? JSON.parse(latestClicksStr) : [];
    
    // Add the new click details to the top of the array
    latestClicks.unshift({ timestamp, page, buttonText, destination });
    
    // Keep only the 100 most recent events
    if (latestClicks.length > 100) {
      latestClicks.pop();
    }
    
    await context.env.ANALYTICS_KV.put("latest_clicks", JSON.stringify(latestClicks));

    console.log(`[Edge Analytics] Logged click for "${buttonText}". Total: ${newCount}`);
    
    return new Response(JSON.stringify({ success: true, totalClicks: newCount, dailyClicks: newDailyClickCount }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to process tracking beacon on edge:", error.message);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
