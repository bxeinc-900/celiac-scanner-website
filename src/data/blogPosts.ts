export interface BlogSubsection {
  subheading: string;
  body: string;
  bulletPoints?: string[];
}

export interface BlogSection {
  heading: string;
  body: string;
  bulletPoints?: string[];
  subsections?: BlogSubsection[];
}

export interface BlogTable {
  headers: string[];
  rows: string[][];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  content: {
    introduction: string;
    sections: BlogSection[];
    table?: BlogTable;
    takeaways?: string[];
    disclaimer?: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gluten-free-tax-secret-most-celiacs-never-use",
    title: "The Gluten-Free Tax Secret Most Celiacs Never Use (And It Could Save You Hundreds)",
    excerpt: "Diagnosed with Celiac Disease? You buy gluten-free food every week and it costs more. Both the IRS in the US and CRA in Canada allow Celiacs to claim the extra price as a medical expense tax deduction. Here is how it works and how Celiac Scanner automates the math.",
    category: "Tax Savings & Health",
    author: "Celiac Scanner Team",
    date: "August 28, 2026",
    readTime: "8 min read",
    content: {
      introduction: "You have celiac disease. You buy gluten-free food every single week. And it costs more — a lot more — than regular food. Here's the part almost nobody tells you: some of that extra money can come back to you. Both the IRS in the United States and the CRA in Canada let people with a celiac disease diagnosis deduct part of their gluten-free food costs as a legitimate medical expense tax deduction. Most people just never claim it — because nobody explained it simply. So let's fix that.",
      sections: [
        {
          heading: "Wait — Gluten-Free Food Is Tax Deductible?",
          body: "Yes. If you have a celiac disease diagnosis, or a doctor-documented severe gluten sensitivity, the extra cost of gluten-free products can count as a medical expense on your taxes in both the United States and Canada.\n\nBut there's a catch: You don't deduct your whole grocery bill. You deduct the difference (known as the incremental cost).",
          bulletPoints: [
            "A regular loaf of bread costs $3.00",
            "A gluten-free loaf of bread costs $8.00",
            "You may be able to deduct the $5.00 difference"
          ],
          subsections: [
            {
              subheading: "Two Exceptions Where You Can Deduct the Full Price",
              body: "There are two scenarios where you can deduct the full price rather than just the difference:",
              bulletPoints: [
                "Products with no regular version at all: Items like xanthan gum or gluten-free flour blends you use specifically for baking.",
                "Shipping costs: Shipping fees for ordering gluten-free food online when it is not available locally."
              ]
            }
          ]
        },
        {
          heading: "How the Gluten-Free Tax Deduction Works in the United States",
          body: "Diagnosed with celiac disease and living in the U.S.? Here is your step-by-step path to claiming eligible medical deductions under IRS rules.",
          subsections: [
            {
              subheading: "Step 1: Get a Diagnosis Letter",
              body: "Ask your doctor for a written letter. It should confirm your celiac disease diagnosis and state that a gluten-free diet is medically necessary. Keep this letter safe."
            },
            {
              subheading: "Step 2: Save Every Receipt",
              body: "Every time you buy gluten-free groceries, keep the receipt. Bread, pasta, crackers, flour, cereal — all of it."
            },
            {
              subheading: "Step 3: Calculate the Difference",
              body: "For each item, compare the gluten-free price to the regular price. Write down the difference. This is your deductible amount for that item."
            },
            {
              subheading: "Step 4: Itemize Your Deductions",
              body: "You can only claim this tax deduction if you itemize on Schedule A of IRS Form 1040. If you take the standard deduction instead, you cannot claim this benefit."
            },
            {
              subheading: "Step 5: Clear the 7.5% AGI Threshold",
              body: "Your total medical expenses — including your gluten-free food difference — must exceed 7.5% of your Adjusted Gross Income (AGI). Only the amount above that line is deductible."
            },
            {
              subheading: "The Legal Backbone",
              body: "This deduction isn't new or experimental. It is rooted in decades of IRS guidance, including IRS Publication 502 and older rulings like Revenue Ruling 55-261, Revenue Ruling 76-80, and Revenue Ruling 2000-24."
            }
          ]
        },
        {
          heading: "How the Gluten-Free Tax Credit Works in Canada",
          body: "Canada has offered a version of this benefit since 2003 under the Medical Expense Tax Credit (METC). If you have a celiac disease diagnosis and live in Canada, here is your path.",
          subsections: [
            {
              subheading: "Step 1: Get a Doctor's Letter",
              body: "Get written confirmation from your physician confirming your celiac disease diagnosis and requirement for a gluten-free diet."
            },
            {
              subheading: "Step 2: Track Every Purchase",
              body: "Save receipts for every certified gluten-free food item you buy throughout the calendar year."
            },
            {
              subheading: "Step 3: Build a Comparison Summary",
              body: "For each item, note the gluten-free price and a comparable regular price. Group similar items together (bread with bread, crackers with crackers)."
            },
            {
              subheading: "Step 4: Claim It on Your T1 Return",
              body: "Add the total incremental cost to your other eligible costs under the Medical Expense Tax Credit (METC) on your T1 tax return."
            },
            {
              subheading: "Step 5: Don't Mail Receipts (Keep for CRA Review)",
              body: "Do not mail your receipts in automatically. The Canada Revenue Agency (CRA) may request to inspect them if your tax return is selected for review."
            },
            {
              subheading: "Important Rule: Shared Households",
              body: "If you share a gluten-free product with someone who does not have celiac disease (a spouse, roommate, or sibling), you can only claim the portion you actually ate."
            }
          ]
        },
        {
          heading: "How Celiac Scanner Automates Receipt Tracking & Tax History",
          body: "Manually keeping paper receipts in shoe boxes and typing price differences into spreadsheets takes dozens of hours each year. That's why we built the Celiac Scanner Receipt & Tax Deduction Tracker.",
          subsections: [
            {
              subheading: "1. Instant Receipt OCR & Multimodal AI Scanning",
              body: "Snap a quick photo of paper grocery store receipts (Target, Walmart, Whole Foods, Trader Joe's, Loblaws, Metro, etc.) or upload digital e-receipts. Celiac Scanner's Gemini AI reads every line item, automatically identifying certified gluten-free items."
            },
            {
              subheading: "2. Automatic Benchmark Math & Incremental Calculation",
              body: "No manual research required. The app automatically pairs each gluten-free purchase with standard item benchmark prices and computes your tax-deductible incremental savings instantly."
            },
            {
              subheading: "3. Digital Receipt History & Monthly Tax Logs",
              body: "Every scan is saved to your private Receipt History log. View running monthly totals, inspect itemized purchase breakdowns, and filter by store or date range at any time."
            },
            {
              subheading: "4. One-Tap Audit-Ready Tax Exports",
              body: "When tax season arrives, tap one button to generate a clean, itemized PDF tax summary report and CSV spreadsheet. Hand it directly to your CPA or upload it to TurboTax or H&R Block."
            }
          ]
        },
        {
          heading: "Is Celiac Disease a Disability? (And Does That Affect Taxes?)",
          body: "Under the Americans with Disabilities Act (ADA), Celiac Disease is recognized as a disability because it substantially limits digestion and eating. This guarantees rights to safe food accommodations in schools and workplaces.\n\nHowever, your ADA status and your tax deduction are two separate systems. Your gluten-free food tax deduction runs strictly on IRS and CRA medical-expense rules."
        },
        {
          heading: "Your Simple 5-Step Receipt-Tracking System",
          body: "Build this habit once and use it forever to protect your savings:",
          bulletPoints: [
            "1. Get your doctor's official diagnosis letter now.",
            "2. Open Celiac Scanner and navigate to the Receipt Scanner tool.",
            "3. Snap a photo of every gluten-free grocery receipt right after shopping.",
            "4. Review your automatic Receipt History log and monthly deduction total.",
            "5. Export your itemized PDF/CSV tax report at filing time for your tax preparer."
          ]
        }
      ],
      table: {
        headers: ["Tax Feature", "United States 🇺🇸", "Canada 🇨🇦"],
        rows: [
          ["What it's called", "Medical expense deduction", "Medical Expense Tax Credit (METC)"],
          ["What you claim", "The incremental (difference) cost", "The incremental (difference) cost"],
          ["Full-cost exceptions", "Items with no regular equivalent + shipping", "Baking ingredients with no direct equivalent"],
          ["Income threshold", "Must exceed 7.5% of AGI", "Annual minimum CRA threshold"],
          ["Requirement", "Must itemize on Schedule A", "Claimed as credit with summary log"],
          ["Shared households", "No explicit splitting rule", "Must split cost by portion actually eaten"],
          ["Automated Tracking", "Celiac Scanner AI Receipt Log", "Celiac Scanner AI Receipt Log"]
        ]
      },
      takeaways: [
        "A doctor's formal Celiac diagnosis letter is mandatory for IRS and CRA claims.",
        "You deduct the price difference (incremental cost) between GF and regular items.",
        "Celiac Scanner's new Receipt Scanner automatically parses receipts, calculates price differences, and logs receipt history.",
        "Export audit-ready PDF and CSV reports for your accountant or tax software in one tap."
      ],
      disclaimer: "This article is educational only and is not tax or legal advice. Tax rules and thresholds change every year. Consult a qualified tax professional, and check current IRS Publication 502 or CRA Medical Expenses guidance, before filing."
    }
  },
  {
    slug: "gluten-free-tax-deductions-us-canada-guide",
    title: "How to Claim Celiac Gluten-Free Food Tax Deductions in the US & Canada (IRS & CRA Guide)",
    excerpt: "Diagnosed with Celiac Disease? You can claim the extra cost of gluten-free groceries as a medical expense on your taxes in the US and Canada. Here is how to track receipts and maximize your savings.",
    category: "Tax Savings & Health",
    author: "Celiac Scanner Team",
    date: "August 28, 2026",
    readTime: "6 min read",
    content: {
      introduction: "Living with Celiac Disease means a strict gluten-free diet is a medical necessity, not a choice. Because gluten-free items often cost two to three times more than standard groceries, both the IRS in the United States and the CRA in Canada allow individuals diagnosed with Celiac Disease to claim these extra costs as deductible medical expenses.",
      sections: [
        {
          heading: "Who Qualifies for Celiac Tax Deductions?",
          body: "To claim gluten-free grocery tax deductions, tax authorities in both countries require a formal medical diagnosis of Celiac Disease from a licensed medical professional.",
          bulletPoints: [
            "Official Celiac Disease Diagnosis: Keep a signed letter or medical record from your doctor confirming your Celiac diagnosis.",
            "Itemized Store Receipts: Retain detailed receipt records showing each gluten-free purchase.",
            "Incremental Price Records: Track the price difference between gluten-free food and standard gluten-containing items."
          ]
        },
        {
          heading: "US IRS Tax Rules (Revenue Ruling 2000-24)",
          body: "In the United States, under IRS Revenue Ruling 2000-24 and Publication 502, the excess cost of gluten-free food required to treat Celiac Disease is considered a deductible medical expense under itemized deductions (Schedule A).",
          bulletPoints: [
            "Deductible Amount: Only the difference between the gluten-free product cost and standard product cost is deductible.",
            "Full Product Deduction: Full price is deductible only for products with no standard equivalent, such as xanthan gum.",
            "IRS Threshold: Total medical expenses must exceed 7.5% of your Adjusted Gross Income (AGI)."
          ]
        },
        {
          heading: "Canada CRA Tax Rules (Medical Expense Tax Credit - METC)",
          body: "In Canada, the Canada Revenue Agency (CRA) allows individuals diagnosed with Celiac Disease to claim the incremental cost of certified gluten-free products under the Medical Expense Tax Credit (METC).",
          bulletPoints: [
            "Calculating the Incremental Cost: The deductible amount is the price of the GF item minus the price of a comparable regular item.",
            "Receipt Requirements: You must keep all grocery receipts along with a calculation summary sheet showing itemized price differences.",
            "Doctor's Letter: Keep a written prescription or diagnosis note from your physician on file."
          ]
        }
      ],
      takeaways: [
        "A formal Celiac diagnosis from a doctor is required by both IRS and CRA.",
        "You deduct the price difference (incremental cost) between gluten-free and standard foods.",
        "Saving itemized store receipts is mandatory for audit protection.",
        "Celiac Scanner automates receipt scanning, cost difference calculations, and tax report exports."
      ]
    }
  },
  {
    slug: "introducing-gluten-free-receipt-scanner",
    title: "Introducing the Gluten-Free Receipt Scanner: Turn Grocery Receipts into Real Tax Savings",
    excerpt: "We built the ultimate tool for Celiac safety and tax savings. Learn how our new AI receipt scanner automatically tracks gluten-free purchases and prepares IRS and CRA tax deduction logs.",
    category: "Product Launch",
    author: "Celiac Scanner Team",
    date: "August 20, 2026",
    readTime: "4 min read",
    content: {
      introduction: "We are thrilled to launch one of our most requested features: the Gluten-Free Receipt Scanner! Designed specifically for individuals diagnosed with Celiac Disease in the US and Canada, this tool turns your everyday grocery receipts into audit-proof tax savings.",
      sections: [
        {
          heading: "Why We Built the Receipt Scanner",
          body: "For years, our community told us that saving paper receipts in shoe boxes and manually computing price differences for tax season was overwhelming. Many people missed out on hundreds of dollars in eligible tax deductions simply because the tracking process was too painful.",
          bulletPoints: [
            "Eliminate manual spreadsheet entry for grocery receipts.",
            "Automatically categorize certified gluten-free items.",
            "Calculate eligible IRS & CRA tax savings in seconds."
          ]
        },
        {
          heading: "How it Works in 3 Simple Steps",
          body: "Using the Receipt Scanner is fast and seamless:",
          bulletPoints: [
            "1. Snap a Photo: Take a quick picture of your paper receipt or upload a digital receipt.",
            "2. AI Item Extraction: Our Gemini AI reads each line item, identifying gluten-free products and matching standard item prices.",
            "3. Auto Tax Calculation: See your total spent and eligible tax deduction breakdown instantly."
          ]
        }
      ],
      takeaways: [
        "No more shoe boxes full of receipts—scan and digitize in seconds.",
        "Automatic incremental cost calculation for US (IRS) and Canada (CRA) tax rules.",
        "Export audit-proof CSV & PDF summaries with a single tap."
      ]
    }
  },
  {
    slug: "hidden-gluten-uncovered-10-sneaky-ingredients",
    title: "Hidden Gluten Uncovered: 10 Sneaky Ingredients to Watch Out For",
    excerpt: "Gluten hides under dozens of innocent-sounding names on food labels. Here are 10 ingredients that trick Celiac shoppers and how AI scanning keeps you safe.",
    category: "Safety & Food Tips",
    author: "Celiac Scanner Team",
    date: "August 12, 2026",
    readTime: "5 min read",
    content: {
      introduction: "Reading ingredient labels when you have Celiac Disease requires constant vigilance. Wheat, barley, and rye aren't always explicitly listed—manufacturers often use technical or derivative names that mask gluten content.",
      sections: [
        {
          heading: "Top 5 Sneaky Gluten Sources in Everyday Packaged Foods",
          body: "Here are common ingredients that frequently contain hidden gluten:",
          bulletPoints: [
            "Malt Extract & Malt Flavoring: Derived from barley and common in cereals and candies.",
            "Brewer's Yeast: A byproduct of beer brewing that contains barley gluten unless specifically labeled GF.",
            "Textured Vegetable Protein (TVP): Often produced using wheat flour as a binder.",
            "Hydrolyzed Wheat Protein: Used as a flavor enhancer or thickener in soups and sauces.",
            "Modified Food Starch: Outside the US, or if unlabelled, modified food starch can originate from wheat."
          ]
        }
      ],
      takeaways: [
        "Malt, Brewer's Yeast, and TVP are common hidden gluten traps.",
        "Ambiguous terms like 'Natural Flavors' require extra caution.",
        "Celiac Scanner's 30-source database catches hidden gluten before it enters your cart."
      ]
    }
  }
];
