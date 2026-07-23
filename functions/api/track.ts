export const onRequestPost: PagesFunction = async (context) => {
  try {
    const data = await context.request.json();
    console.log("Analytics event received on edge:", data);

    // In a production environment, this is where you can forward the event to a log draining service, 
    // KV, D1, or Workers Analytics Engine. For now, it logs to the Cloudflare console.
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to parse tracking beacon:", error.message);
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
