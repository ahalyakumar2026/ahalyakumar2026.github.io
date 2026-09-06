/*
  ============================================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR WEBSITE'S CONTENT.
  ============================================================================
  Everything you see on the site — your bio, your resume, your travel photos
  and captions — is written below in plain text between quote marks " ".

  RULES FOR EDITING SAFELY:
  1. Only change the text BETWEEN the quote marks. Don't delete the quote
     marks, commas, or curly/square brackets — they hold the structure together.
  2. If you want to add a new travel photo, copy an existing photo "block"
     (the { ... } lines) inside the right album, paste it as a new one,
     and change the src/caption/alt text. See workflows/WORKFLOW.md for the
     full step-by-step guide.
  3. After saving, double-click index.html to preview your changes before
     publishing.
  ============================================================================
*/

const SITE_DATA = {
  name: "Ahalya Kumar",
  tagline: "Product Manager at Doto Health",
  headshot: "images/headshot/ahalya-headshot.jpg",
  linkedin: "https://www.linkedin.com/in/ahalya-kumar-4a6444191",
  email: "ahalyakumar20@outlook.com",

  about: {
    paragraphs: [
      "I'm a Product Manager at Doto Health, a digital health tech startup incubated at IIT Bombay and headquartered in Pune, where I built Nurtura: an AI co-pilot platform for birthing and postpartum care. My work spans taking products from 0 to 1, from problem statement to launch to scale, as well as improving and managing the products already in the hands of clinicians and patients.",
      "I also lead our AI innovation cell, where I've been building out the team from the ground up. Right now we're tackling two hard problems: predicting preterm birth and predicting outcomes from CTG (cardiotocography) data, using AI to help catch risk earlier in pregnancy care.",
      "I recently won the UNICEF Femtech Ventures grant, securing $100K in funding, and represented Doto Health at an international forum in Pretoria, South Africa.",
      "Before Doto Health, I worked at Wadhwani AI, building AI products across radiology, cardiology, oncology, and dermatology. It was my first real exposure to using technology for social good, and the place that shaped my belief in incremental change management: quality care improves only when everyone across the system is on board, not just the technology."
    ],
    hobbies: "Outside of work, I play a lot of sport: tennis, pickleball, table tennis, and basketball. I also watch movies that blow my mind, not just my popcorn budget, play the tabla, and travel solo whenever I get the chance.",
    // Add/remove/edit these freely. Replace the placeholder titles for papers
    // 1 and 2 with their real titles whenever you have them handy.
    research: [
      {
        title: "“Comprehensive Device for Labor, Birthing, and Postpartum Monitoring: A Way Forward in Maternal–Fetal Care” · Journal of Obstetrics and Gynecology of India (2026)",
        url: "https://link.springer.com/article/10.1007/s13224-025-02329-9"
      },
      {
        title: "“Comparative Study of In-Plane Gradient Cellular Pattern Honeycombs with Uniform Compliant Honeycombs” · ScienceDirect",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S2214785322003583"
      },
      {
        title: "Oil Spill Management System Based on Internet of Things",
        url: "https://www.researchgate.net/publication/347555807_Oil_Spill_Management_System_Based_on_Internet_of_Things"
      }
    ]
  },

  // BLOG — add a new post by copying one of these blocks.
  blog: {
    posts: [
      {
        title: "Fresh Eyes Framework",
        publication: "Medium",
        date: "Apr 2024",
        excerpt: "A framework for deliberately bringing outside perspective into product discovery: catching what teams overlook once they're deep in the weeds.",
        url: "https://medium.com/@ahalyakumar/fresh-eyes-framework-a614f7b40582"
      }
    ]
  },

  resume: {
    downloadUrl: "resume/AhalyaKumarResume.pdf",
    experience: [
      {
        company: "Doto Health (CareMother)",
        role: "Product Manager",
        location: "Pune",
        dates: "07/2024 – Present",
        bullets: [
          "Founded and lead the AI/ML team from the ground up: the organization's first machine learning function, building a preterm-birth prediction model on retrospective clinical data, with an asphyxia risk-detection model in development",
          "Engineered a digitized uterine contraction monitoring algorithm, now in production and used by 3,000+ obstetricians and gynecologists nationwide",
          "Led product discovery, market research, and go-to-market strategy for \"Nurtura,\" an AI co-pilot for birthing care, driving its successful launch",
          "Assisted the organization's fundraising from a technical lens and led multi-institutional research partnerships: THSTI, AIIMS Nagpur, St. John's Research Institute, and the University of Oxford, while initiating the Mayo Clinic engagement",
          "Own grant writing for AI and research initiatives, translating technical R&D into funded proposals",
          "Designed and deployed digital referral workflows for last-mile maternal health delivery",
          "Led design research and clinical validation processes, translating user needs and clinical evidence into product and R&D decisions",
          "Built organization-level KPI dashboards and drove cross-functional collaboration across product, operations, and sales teams",
          "Represented Doto Health at the UNICEF Femtech Ventures forum in Pretoria, South Africa",
          "Contribute to the R&D wing (stealth mode), translating early-stage research hypotheses into product concepts"
        ]
      },
      {
        company: "Wadhwani AI",
        role: "Product Analyst",
        location: "New Delhi",
        dates: "11/2022 – 06/2024",
        bullets: [
          "Built a TB chest X-ray screening app for frontline clinicians",
          "Shipped rapid MVPs for AI healthcare applications",
          "Built an AI-based cancer-detection product using computer vision",
          "Proposed an image-based ML platform for partner organizations",
          "Curated the org's product portfolio, showcased at the G20 health working group summit",
          "Led on-site user research and built data pipelines to support model development",
          "Defined partner-level procedures for public health deployment challenges",
          "Built applications and technology interventions in collaboration with policymakers to align product design with public health policy priorities"
        ]
      },
      {
        company: "Tezo",
        role: "Product Business Analyst",
        location: "Hyderabad",
        dates: "08/2021 – 10/2022",
        bullets: [
          "Planned features and ran A/B tests on product mockups",
          "Monitored ongoing project health across releases",
          "Authored user stories, FSDs, and BRDs"
        ]
      },
      {
        company: "Oorwin",
        role: "Product Business Analyst",
        location: "Hyderabad",
        dates: "05/2021 – 07/2021",
        bullets: [
          "Integrated third-party applications",
          "Managed customer change requests",
          "Built mockups for proposed features"
        ]
      }
    ],
    researchFellowship: {
      role: "Research Fellowship",
      organization: "Tata Institute of Fundamental Research (TIFR)",
      bullets: [
        "Worked on a dilution refrigerator, supporting ultra-low-temperature experimental setups for quantum computing research"
      ]
    },
    education: [
      {
        school: "VIT University",
        degree: "B.Tech, Mechanical Engineering",
        dates: "2017 – 2021"
      }
    ],
    // Skills are grouped into categories (industry-standard PM resume
    // structure). Add/remove items freely within a group's "items" list.
    skills: [
      {
        category: "Product & Strategy",
        items: ["Product Strategy", "0→1 Product Development", "Design Research", "Go-to-Market Strategy"]
      },
      {
        category: "AI/ML Fluency",
        items: ["AI Product Development", "AI Evals"]
      },
      {
        category: "Tools & Rapid Prototyping",
        items: ["Figma", "AI-Assisted (\"Vibe\") Coding: Claude, ChatGPT", "Python (Data Analysis)", "Tableau", "Jira / Asana"]
      },
      {
        category: "Domain Expertise",
        items: ["Maternal & Neonatal Health", "Digital Health / HealthTech", "Clinical Research Partnerships", "AI for Social Good"]
      },
      {
        category: "Leadership & Strategy",
        items: ["Team Building & Leadership", "Grant Writing & Fundraising Support", "Technical Partnership Management", "Stakeholder Management"]
      }
    ]
  },

  // TRAVEL GALLERY — grouped by trip/album.
  // To add a photo: copy one of the { src: ..., caption: ..., alt: ... }
  // blocks below, paste it, and edit its src/caption/alt.
  // See workflows/WORKFLOW.md for the full steps (including converting a
  // new photo to the right file format first).
  travel: {
    albums: [
      {
        slug: "south-africa",
        title: "South Africa — UNICEF Femtech Ventures",
        intro: "Photos from representing Doto Health at the UNICEF Femtech Ventures forum in Pretoria, South Africa.",
        photos: [
          { src: "images/travel/south-africa/south-africa-01.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-02.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-03.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-04.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-05.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-06.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-07.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" },
          { src: "images/travel/south-africa/south-africa-08.jpg", caption: "South Africa, UNICEF Femtech Ventures trip", alt: "Photo from the UNICEF Femtech Ventures trip to South Africa" }
        ]
      },
      {
        slug: "georgia",
        title: "Georgia",
        intro: "",
        photos: [
          { src: "images/travel/georgia/georgia-01.jpg", caption: "Georgia", alt: "Travel photo from Georgia" },
          { src: "images/travel/georgia/georgia-02.jpg", caption: "Georgia", alt: "Travel photo from Georgia" }
        ]
      },
      {
        slug: "us-trip",
        title: "US Trip",
        intro: "",
        photos: [
          { src: "images/travel/us-trip/us-trip-01.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-02.jpg", caption: "Arizona", alt: "Travel photo from Arizona, US" },
          { src: "images/travel/us-trip/us-trip-03.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-04.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-05.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-06.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-07.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-08.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-09.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-10.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-11.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" },
          { src: "images/travel/us-trip/us-trip-12.jpg", caption: "US Trip", alt: "Travel photo from a trip to the US" }
        ]
      },
      {
        slug: "himachal",
        title: "Himachal",
        intro: "",
        photos: [
          { src: "images/travel/himachal/himachal-01.jpg", caption: "Himachal Pradesh", alt: "Travel photo from Himachal Pradesh" },
          { src: "images/travel/himachal/himachal-02.jpg", caption: "Himachal Pradesh", alt: "Travel photo from Himachal Pradesh" },
          { src: "images/travel/himachal/himachal-03.jpg", caption: "Himachal Pradesh", alt: "Travel photo from Himachal Pradesh" },
          { src: "images/travel/himachal/himachal-04.jpg", caption: "Himachal Pradesh", alt: "Travel photo from Himachal Pradesh" },
          { src: "images/travel/himachal/himachal-05.jpg", caption: "Himachal Pradesh", alt: "Travel photo from Himachal Pradesh" }
        ]
      }
    ]
  }
};
