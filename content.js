// Add new certificates or headlines to these lists. Latest updates render first.
window.PORTFOLIO_CONTENT = {
  projects: [
    {
      number: "01",
      title: "Two-wheeler safety chipset",
      visual: "assets/project-safety-concept.png",
      visualLabel: "Concept visual · early-stage hardware idea",
      visualAlt: "Concept render of a compact motorcycle safety electronics module beside a motorcycle dashboard",
      credit: "Shalin Rathod · Product concept",
      category: "PRODUCT · HARDWARE SAFETY",
      filter: "product",
      status: "Early-stage concept",
      summary: "A safety-focused hardware concept exploring how a two-wheeler could detect a crash and help trigger a rider alert.",
      challenge: "A crash can leave a rider unable to call for help. The concept looks at how vehicle-side signals could support a faster response.",
      approach: "Explore crash detection and rider alerts, with tyre-pressure monitoring and hazard detection as related directions for Philoi Industries.",
      focus: "Hardware concept development and product direction",
      stack: [],
      note: "Concept stage. There is no public source repository or validated field-performance data yet.",
      links: [
        { label: "Follow project updates", url: "https://www.linkedin.com/in/shalin-rathod-301400305/", kind: "updates" }
      ]
    },
    {
      number: "02",
      title: "SMIDI Grow",
      visual: "assets/project-smidi-dashboard.png",
      visualLabel: "SMIDI Grow · live fleet map screen",
      visualAlt: "SMIDI Grow fleet map dashboard with field-agent roster, route map, dealer and farmer markers, and live fleet activity metrics",
      credit: "Shalin Rathod · Product builder",
      category: "PRODUCT · AGRITECH · MOBILE",
      filter: "product",
      status: "APK in use · wider release planned",
      summary: "A field-operations app built for SMIDI Fertilizers, bringing visits, orders, team activity, and reporting into one workflow.",
      challenge: "Field teams need a practical way to coordinate dealer and farmer visits and keep operational activity visible to the business.",
      approach: "Bring visit coordination, field-agent operations, order workflows, live GPS tracking, reports, and field analytics together in the SMIDI Grow app.",
      focus: "Product development for SMIDI Fertilizers",
      stack: [],
      note: "The Android APK has been distributed to users and is in use. A broader release is planned.",
      links: [
        { label: "Open SMIDI Grow", url: "https://smidigrow.tech/home", kind: "live" },
        { label: "SMIDI Fertilizers website", url: "https://www.smidifertilizers.com/", kind: "company" }
      ]
    },
    {
      number: "03",
      title: "CyberSecure AI SOC Dashboard",
      visual: "assets/project-cybersecure-preview.png",
      visualLabel: "Illustrative prototype interface",
      visualAlt: "Illustrative security analyst interface for uploaded network-flow review, SHAP explanations, and audit history",
      credit: "Shalin Rathod · Prototype builder",
      category: "AI · SECURITY · ANALYTICS",
      filter: "ai",
      status: "Prototype · dataset analysis",
      summary: "A security-analyst dashboard that reviews network-flow data, surfaces suspicious activity, and explains model signals for investigation.",
      challenge: "Network-flow records can be difficult to triage quickly. Analysts need risk signals and context to decide what to review first.",
      approach: "Upload a CSV dataset, score and group likely threat patterns, inspect visual summaries, review SHAP explanations, and view a hash-linked audit history.",
      focus: "Threat triage, explainability, and analyst decision support",
      stack: ["Python", "Streamlit", "SHAP", "Network-flow analysis"],
      note: "This prototype analyzes uploaded datasets and recommends actions. It does not monitor live websites or enforce firewall/IP blocks.",
      links: [
        { label: "View GitHub repository", url: "https://github.com/shalin0078/CyberSecur", kind: "repo" }
      ]
    },
    {
      number: "04",
      title: "CivicSnap",
      visual: "assets/project-civicsnap-preview.png",
      visualLabel: "Illustrative UI · live site linked",
      visualAlt: "Illustrative CivicSnap report dashboard with photo evidence, a map pin, status steps, and authority review queue",
      credit: "Shalin Rathod · Product builder",
      category: "FULL-STACK · CIVIC TECH",
      filter: "software",
      status: "Live deployment · public board requires sign-in",
      summary: "A civic issue-reporting workflow designed to move neighborhood problems from a photo report to a transparent resolution update.",
      challenge: "Residents often lack a simple way to report local hazards and track whether the issue is being addressed.",
      approach: "Combine photo and GPS-based reporting, priority tags, a four-step status pipeline, community endorsements, an authority portal, and CSV export.",
      focus: "Citizen reporting and municipal operations workflows",
      stack: ["React", "Node.js", "Express", "MongoDB", "Supabase"],
      note: "The public site is live, while the reporting board requires sign-in. No adoption figures are claimed here.",
      links: [
        { label: "Open CivicSnap live site", url: "https://civicsnap-five.vercel.app/", kind: "live" },
        { label: "View GitHub repository", url: "https://github.com/shalin0078/civicsnap", kind: "repo" }
      ]
    },
    {
      number: "05",
      title: "Katloss Studio",
      visual: "assets/project-katloss-preview.png",
      visualLabel: "Illustrative studio UI",
      visualAlt: "Illustrative Katloss Studio image inpainting workspace with a mask and before-and-after preview",
      credit: "Shalin Rathod · Product builder",
      category: "AI · COMPUTER VISION · MEDIA",
      filter: "ai",
      status: "Deployed project · visual is illustrative",
      summary: "A photo and video inpainting studio exploring watermark, logo, timestamp, and unwanted-object removal workflows.",
      challenge: "Removing an object from a still image is different from keeping a clean, consistent result across many video frames.",
      approach: "Pair content-aware image inpainting with a frame-based video workflow, mask creation, and a studio interface for processing and preview.",
      focus: "Image and video processing workflows",
      stack: ["Python", "FastAPI", "OpenCV", "NumPy", "FFmpeg", "React", "TypeScript", "Vite"],
      note: "The repository documents the intended processing pipeline; results depend on the input media and mask quality.",
      links: [
        { label: "View GitHub repository", url: "https://github.com/shalin0078/katloss", kind: "repo" }
      ]
    },
    {
      number: "06",
      title: "VideoSearch",
      visual: "assets/project-videosearch-preview.png",
      visualLabel: "Illustrative interface · fork-based adaptation",
      visualAlt: "Illustrative local video search interface with transcript matches and a timestamped video timeline",
      credit: "Shalin Rathod · Fork-based adaptation",
      category: "AI · SEARCH · VIDEO",
      filter: "ai",
      status: "Fork-based adaptation",
      summary: "A local workflow for finding spoken phrases inside a video library and jumping to matching timestamps.",
      challenge: "Finding one idea or phrase in long videos usually means scrubbing through the footage manually.",
      approach: "Convert video audio, transcribe speech with Whisper, create semantic embeddings with Ollama, and search for matching text and timestamps.",
      focus: "Transcription, semantic retrieval, and timestamp navigation",
      stack: ["Python", "Flask", "Whisper", "Ollama", "FFmpeg"],
      note: "This repository is a fork-based adaptation. The README credits the upstream project; the page presents the workflow without claiming original authorship of the upstream code.",
      links: [
        { label: "View GitHub repository", url: "https://github.com/shalin0078/TransVideoRag", kind: "repo" }
      ]
    },
    {
      number: "07",
      title: "Delta P&L Content Toolkit",
      visual: "assets/project-delta-toolkit-preview.png",
      visualLabel: "Illustrative tool preview",
      visualAlt: "Illustrative trade-note workflow with vertical video, graphic, and caption previews",
      credit: "Shalin Rathod · Tool builder",
      category: "PYTHON · AUTOMATION · MEDIA",
      filter: "software",
      status: "Local developer tool",
      summary: "A Python utility that turns manually recorded trading results into share-ready video, story graphics, and captions.",
      challenge: "Recording a daily result and turning it into consistent social content can involve repetitive editing and formatting.",
      approach: "Capture P&L, market, position, leverage, and notes; generate a vertical reel, a story image, a caption, and a local preview dashboard.",
      focus: "Local automation and reusable media generation",
      stack: ["Python", "FFmpeg", "HTML"],
      note: "This is a tracking and content-generation tool. It does not execute trades or provide investment advice.",
      links: [
        { label: "View GitHub repository", url: "https://github.com/shalin0078/delta-trading-challenge", kind: "repo" }
      ]
    },
    {
      number: "08",
      title: "Heart Disease Risk Checker",
      visual: "assets/project-heart-risk-preview.png",
      visualLabel: "Illustrative educational interface",
      visualAlt: "Illustrative educational machine-learning model comparison and feature explanation dashboard",
      credit: "Shalin Rathod · Learning project",
      category: "MACHINE LEARNING · HEALTH DATA",
      filter: "ai",
      status: "Educational ML project",
      summary: "A learning project that compares machine-learning approaches to estimate heart-disease risk from structured clinical features.",
      challenge: "A model’s output needs context: performance should be measured on a dataset and presented as an educational estimate, not a diagnosis.",
      approach: "Prepare structured features, compare nine models, inspect diagnostics, and expose a simple command-line risk-checking workflow.",
      focus: "Model comparison and responsible presentation of prediction limits",
      stack: ["Python", "XGBoost", "Machine learning"],
      note: "The repository reports 82% accuracy and 0.75 AUC for its best model on the included dataset. This is not a clinical tool or medical advice.",
      links: [
        { label: "View GitHub repository", url: "https://github.com/shalin0078/HEART-DISEASE-RISK-CHECKER", kind: "repo" }
      ]
    },
    {
      number: "09",
      title: "Mail Classification Model",
      visual: "assets/project-mail-classifier-preview.png",
      visualLabel: "Illustrative local tool interface",
      visualAlt: "Illustrative local email classification workspace with generic messages and category labels",
      credit: "Shalin Rathod · ML baseline",
      category: "PYTHON · NLP · CLASSIFICATION",
      filter: "ai",
      status: "Reproducible baseline",
      summary: "A configurable email-classification workflow for categories such as primary, promotions, updates, spam, and phishing.",
      challenge: "Email triage depends on message text and signals such as suspicious links, urgency, and attachment context.",
      approach: "Normalize messages, combine word and character TF-IDF features with metadata/risk features, then train, evaluate, and predict from the command line.",
      focus: "Feature engineering and reproducible model workflows",
      stack: ["Python", "scikit-learn", "TF-IDF", "NLP"],
      note: "Included sample data is small or synthetic for demonstration and checks; it should not be treated as evidence of production accuracy.",
      links: [
        { label: "View GitHub repository", url: "https://github.com/shalin0078/mail_classification_model", kind: "repo" }
      ]
    }
  ],
  certificates: [
    {
      title: "AICTE · HEI Engagement AI Pre-Summit",
      issuer: "AICTE & Innovation Cell, Parul University",
      date: "6 February 2026",
      kind: "Certificate of Participation",
      image: "assets/linkedin-document-preview.jpg",
      description: "Participated in the HEI Pre-Summit Engagement for India AI Impact Summit 2026, organised by AICTE and the Innovation Cell at Parul University. The programme explored how agentic AI can support innovation and entrepreneurship in higher education.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    },
    {
      title: "Ideathon · Plinth 2026",
      issuer: "LNM Institute of Information Technology, Jaipur",
      date: "January 2026",
      kind: "Certificate of Participation",
      image: "assets/plinth-2026-ideathon.png",
      description: "Recognises participation in the Plinth 2026 Ideathon organised by LNMIIT Jaipur. The experience involved framing a problem, developing an idea with a team, and presenting a solution.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    },
    {
      title: "The Unstoppable Hackathon",
      issuer: "AOSSIE · Stability Nexus · Djed Alliance · Ergo Platform · CML-BDA",
      date: "13–14 December 2025",
      kind: "Certificate of Participation",
      image: "assets/unstoppable-hackathon.png",
      credentialId: "c302d7bb-b0c5-4865-832a-de2e953a4e59",
      description: "Recognises participation in The Unstoppable Hackathon, hosted at LNMIIT Jaipur on 13–14 December 2025. The event brought teams together for an intensive build and problem-solving sprint.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    },
    {
      title: "RΞDACT 2025 · 24-hour Hackathon",
      issuer: "Suraksha SPIT Cell · Sardar Patel Institute of Technology",
      date: "22–23 November 2025",
      kind: "Certificate of Participation",
      image: "assets/redact-2025.png",
      credentialId: "3c413265-1f81-4d2a-a3d9-b9413ecdf996",
      description: "Recognises participation in RΞDACT 2025, a 24-hour hackathon hosted at Sardar Patel Institute of Technology, Mumbai. The event challenged participants to collaborate and build under a focused deadline.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    },
    {
      title: "Stock Analysis Guru · Mock Stock Challenge",
      issuer: "Army Institute of Management, Kolkata · KUBER",
      date: "15–16 December 2025",
      kind: "Certificate of Participation",
      image: "assets/stock-analysis-guru.png",
      description: "Recognises participation in the two-day Stock Analysis Guru mock stock challenge, organised by AIM Kolkata’s Finance Club, KUBER. The simulation provided practical experience in analysing market data, building a virtual portfolio, and considering risk.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    },
    {
      title: "Startup Hackathon 3.0 · Build Your Startup in 8 Hours",
      issuer: "Mitraroop Foundation",
      date: "",
      kind: "Certificate of Participation · Team shalinrathod02",
      image: "assets/startup-hackathon-3.png",
      description: "Recognises participation as team shalinrathod02 in Startup Hackathon 3.0. The eight-hour challenge focused on shaping a startup idea into a practical concept, with prizes worth ₹1,00,000 announced by the organisers.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    },
    {
      title: "Vadodara Hackathon 6.0 · Top 45 Team Selection",
      issuer: "PIERC · Parul University",
      date: "2–4 & 13 September 2025",
      kind: "Certificate of Achievement",
      image: "assets/vadodara-hackathon-6.png",
      description: "Recognises selection among the top 45 teams at Vadodara Hackathon 6.0. PIERC at Parul University noted the idea’s innovation potential, feasibility, and problem-solving approach.",
      sourceUrl: "https://www.linkedin.com/in/shalin-rathod-301400305/"
    }
  ],
  updates: [
    { title: "SMIDI Grow: built for real-world field challenges", date: "Product update", category: "Built for SMIDI Fertilizers", summary: "SMIDI Grow brings dealer and farmer visits, field-agent operations, orders, live GPS tracking, reports, and field analytics into one workflow. Its Android APK has been distributed to users and is in use; a broader release is planned.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7516158254486519808/" },
    { title: "A crash detection chipset for two-wheeler safety", date: "Project update", category: "Philoi Industries", summary: "A safety system designed to detect, respond, and alert in real time. The work is part of Philoi’s broader exploration of tyre-pressure monitoring and hazard detection.", url: "https://www.linkedin.com/in/shalin-rathod-301400305/" },
    { title: "From college student to founder", date: "LinkedIn · Philoi launch", category: "Founder journey", summary: "Philoi Industries joined PIERC Cohort 9 at Parul University, beginning the startup’s incubation journey.", url: "https://www.linkedin.com/in/shalin-rathod-301400305/" },
    { title: "India AI Impact Summit 2026 · HEI Pre-Summit Engagement", date: "6 February 2026", category: "Event & certificate", summary: "Participated in the AICTE and Innovation Cell pre-summit engagement at Parul University, Vadodara.", url: "https://www.linkedin.com/in/shalin-rathod-301400305/" }
  ]
};
