export type Shot = {
  src: string;
  alt: string;
  phone?: boolean;
  wide?: boolean;
  contain?: boolean;
  width?: number;
  height?: number;
};

export type WorkPoint = {
  label?: string;
  href?: string;
  text: string;
};

export type WorkItem = {
  years: string;
  title: string;
  role?: string;
  tags?: string[];
  href?: string;
  logo?: string;
  /** More than one logo, when the entry covers more than one publication. */
  logos?: { src: string; alt: string }[];
  /** Show the title even when a logo is present. Use when the logo does not spell the title. */
  showTitle?: boolean;
  /** Supports [text](url) links. */
  body?: string;
  points?: WorkPoint[];
  shots?: Shot[];
};

function shots(slug: string, count: number, title: string, ext = "png"): Shot[] {
  return Array.from({ length: count }, (_, index) => ({
    src: `/images/work/screenshots/${slug}-${index}.${ext}`,
    alt: `${title}`,
  }));
}

export const openSource: WorkItem[] = [
  {
    years: "2025 to present",
    title: "Solana Program Examples",
    role: "Maintainer",
    href: "https://github.com/quicknode/solana-program-examples",
    body: "I maintain the [largest examples of financial software on the world's most active blockchain](https://github.com/quicknode/solana-program-examples). The repo started as small single-feature example programs and had fallen into disrepair. I forked it, fixed the broken code, ported it to Anchor 2 and Quasar, and added examples for exchanges, options trading, parimutuel betting, and other kinds of financial products.",
    shots: [
      {
        src: "/images/work/screenshots/solana-program-examples-banner.png",
        alt: "Quicknode Solana Program Examples banner",
        contain: true,
        width: 3840,
        height: 1456,
      },
    ],
  },
  {
    years: "2009 to present",
    title: "python-docx",
    role: "Creator",
    href: "https://github.com/mikemaccana/python-docx",
    body: "The Python library for creating, editing, and saving Microsoft Word documents. I [created python-docx in 2009](https://stackoverflow.com/questions/116139/how-can-i-search-a-word-in-a-word-2007-docx-file/1979864#1979864) after needing a native way to read Word documents in Python. Microsoft uses it to read Word files in [its own AI tools](https://github.com/microsoft/markitdown/blob/main/packages/markitdown-ocr/pyproject.toml).",
    shots: shots("python-docx", 1, "python-docx"),
  },
];

export const works: WorkItem[] = [
  {
    years: "2025 to present",
    title: "Quicknode",
    role: "Solana Developer Relations",
    tags: ["finance", "Y Combinator", "crypto", "blockchain", "AI"],
    href: "https://www.quicknode.com/",
    logo: "/logos/quicknode.svg",
    body: "I create blockchain finance content at Quicknode.",
    shots: [
      {
        src: "/images/quicknode-speaking-1.jpg",
        alt: "Speaking about managed funds for Quicknode Solana",
      },
      {
        src: "/images/quicknode-allocation.png",
        alt: "NVDA rallies, and the allocation unbalances between TSLAx and NVDAx",
      },
      {
        src: "/images/quicknode-speaking-2.jpg",
        alt: "Speaking for Quicknode Solana",
      },
      { src: "/images/quicknode.jpg", alt: "Quicknode homepage" },
    ],
  },
  {
    years: "2023 to 2024",
    title: "Solana Foundation",
    role: "Developer Education",
    tags: ["crypto", "blockchain"],
    href: "https://solana.org/",
    logo: "/logos/solana-foundation.svg",
    body: "I ran education at the Solana Foundation, where I created a four-day Solana training program taught to hundreds of students from Romania to US Ivy League universities. I co-created and presented the 2024 Developer Bootcamp. I was responsible for the Solana developer courses, the highest-retention content on solana.com, and ran a team of six Superteam contributors who maintained them. I wrote solana-helpers, about 30,000 downloads a week.",
    shots: [
      {
        src: "/images/columbia-blockchain-club.jpg",
        alt: "Teaching the Columbia Blockchain Club for the Solana Foundation",
        wide: true,
      },
    ],
  },
  {
    years: "2022 to 2023",
    title: "Portal Payments",
    role: "CTO",
    tags: ["finance", "crypto", "blockchain"],
    body: "CTO of Portal Payments. Two prizes at the Solana Sandstorm hackathon. We built a novel key recovery mechanism that allowed wallets to be recovered with cryptographically secure yet memorable phrases, and solved the “sent to wrong account” problem by creating an identity token displayed when entering a recipient address.",
    shots: [
      {
        src: "/images/portal-verified-recipient.png",
        alt: "Portal Wallet transfer screen showing a verified named recipient",
        phone: true,
      },
      {
        src: "/images/portal-home.jpg",
        alt: "Portal Payments home, with a dollar balance and named recipients",
        phone: true,
      },
      {
        src: "/images/portal-collectibles.jpg",
        alt: "Portal Payments collectibles",
        phone: true,
      },
      {
        src: "/images/portal-collectible.jpg",
        alt: "A Portal Payments collectible",
        phone: true,
      },
    ],
  },
  {
    years: "2021 to 2022",
    title: "CMC Markets",
    role: "Technical lead and advisor, CMC Invest",
    tags: ["finance", "consumer"],
    href: "https://www.cmcinvest.com/en-gb/",
    logo: "/logos/cmc.svg",
    body: "Technical lead and advisor on CMC Invest, the CMC Markets iPhone app for shares, ETFs, and funds in the UK.",
    shots: [
      {
        src: "/images/cmc-invest-home.webp",
        alt: "CMC Invest home screen with a portfolio balance and account options",
        phone: true,
      },
      {
        src: "/images/cmc-invest-asset.webp",
        alt: "CMC Invest Vodafone share detail with price chart and buy or sell controls",
        phone: true,
      },
      {
        src: "/images/cmc-invest-esg-overview-2022.png",
        alt: "CMC Invest ESG tab for Sainsbury, showing its ESG risk score and controversy category",
        phone: true,
      },
      {
        src: "/images/cmc-invest-esg-involvement-2022.png",
        alt: "CMC Invest BP product-involvement screen, showing ratings for areas including oil and gas",
        phone: true,
      },
      {
        src: "/images/cmc-invest-community-2022.jpg",
        alt: "CMC Invest community feature-feedback page shown on an iPhone",
        phone: true,
      },
    ],
  },
  {
    years: "2021",
    title: "Humanloop",
    role: "Engineer",
    tags: ["Y Combinator", "exit", "AI", "infrastructure"],
    href: "https://humanloop.com/",
    logo: "/logos/humanloop.svg",
    body: "First engineer at Humanloop, a Y Combinator company. The product was a machine-learning classification model that engaged human subject-matter experts to push into cases where the model's existing training data was incomplete. The product was a document interface for those humans in the loop to interact with the model.\nHumanloop exited to Anthropic in 2025.",
    shots: [
      {
        src: "/images/humanloop-classification.png",
        alt: "Humanloop document-labeling interface with entities highlighted for classification",
      },
      {
        src: "/images/humanloop-label-comment-2021.png",
        alt: "Humanloop 2021 annotation interface with a comment about combining HVAC labels",
      },
    ],
  },
  {
    years: "2020",
    title: "Daisie",
    role: "Engineering lead",
    tags: ["consumer"],
    href: "https://www.daisie.com/",
    logo: "/logos/daisie.png",
    body: "Engineering lead for a team of six and 160,000 users. I made search results deterministic, migrated the chat backend with no downtime, shipped the first revenue-generating feature (live workshops), and cut CI from 42 minutes to 2.",
    shots: [
      {
        src: "/images/daisie-workshop-2021.png",
        alt: "Daisie workshop detail screen for a short-film class, captured from its 2021 App Store listing",
        phone: true,
      },
      {
        src: "/images/daisie-browse-2021.png",
        alt: "Daisie Browse screen listing upcoming workshops, captured from its 2021 App Store listing",
        phone: true,
      },
      {
        src: "/images/daisie-mobile-2021.png",
        alt: "Daisie 2021 app screens showing a live creator call and the Browse schedule",
        phone: true,
      },
      {
        src: "/images/daisie-phones-2021.png",
        alt: "Daisie 2021 photography room welcome and live chat screens on overlapping phones",
        phone: true,
      },
    ],
  },
  {
    years: "2018 to 2020",
    title: "BoomSaaS",
    role: "Founder",
    tags: ["Entrepreneur First"],
    logo: "/images/logos/boomsaas.png",
    body: "Entrepreneur First, London. The idea was to plug a product into an integrated SaaS business instead of assembling billing, users, CRM, and messaging by hand. It did not continue after a cofounder split.",
    shots: shots("boomsaas", 8, "BoomSaaS"),
  },
  {
    years: "2015 to 2020",
    title: "CertSimple",
    role: "Founder",
    tags: ["finance", "crypto", "Entrepreneur First", "Y Combinator", "exit"],
    logo: "/images/logos/certsimple.png",
    body: "I founded CertSimple, used by Monzo, Buzzfeed, and most London fintechs. Verifying the legal entity behind a website, for display in the “green bar” browsers showed at the time, took up to a month. I invented a process that reduced the time to a few minutes. The company reached £22k a month, was featured in TechCrunch, and was part of Entrepreneur First. Y Combinator flew me to Mountain View for final founder interviews in 2016, but I wasn't selected for the cohort.\nCertSimple exited, selling its core technology to DigiCert, and sold the name and brand to Expedited Security in January 2020.",
    shots: shots("certsimple", 5, "CertSimple"),
  },
  {
    years: "2014 to 2015",
    title: "Make Us Proud",
    role: "Tech lead",
    logo: "/images/logos/make-us-proud.png",
    tags: ["consumer"],
    points: [
      {
        label: "MyCognition Rise",
        text: "A site for MyCognition's Rise cognitive training product, and the payment and signup flow around it. Node, Stripe, and Quaderno.",
      },
      {
        label: "Microsoft Surface 2 launch campaign site",
        text: "CSS, Node, and Azure, with Twitter and Instagram API integrations.",
      },
    ],
    shots: [
      {
        src: "/images/work/screenshots/uncompromise-4.png",
        alt: "Surface 2 tablets and keyboard on the Work, play anywhere microsite",
      },
      { src: "/images/work/screenshots/uncompromise-0.png", alt: "Microsoft Surface 2" },
    ],
  },
  {
    years: "2014",
    title: "Sandpit Lab",
    role: "Tech lead",
    tags: ["finance"],
    logo: "/images/logos/sandpit-lab.png",
    points: [
      {
        text: "Waves watched Twitter for a keyword, hashtag, or user and alerted on changes in sentiment, volume, and related words. When the Prime Minister of Ukraine resigned, Waves sent alerts 40 minutes before BBC and Sky had published a story.",
      },
      {
        text: "Online Wednesday was an internal tool for American Express to find products people were talking about and rank interest using Facebook and Twitter.",
      },
    ],
    shots: shots("waves", 6, "Waves"),
  },
  {
    years: "2013 to 2014",
    title: "Firework",
    role: "Founder",
    logo: "/images/logos/firework.png",
    body: "Deploy from version control to the cloud. Firework brought commits, deploys, logs, and CI into one place, then used that to get the right build into an environment.",
    shots: shots("firework", 3, "Firework"),
  },
  {
    years: "2012 to 2013",
    title: "Bazaarvoice",
    role: "Senior Developer",
    tags: ["consumer"],
    logo: "/images/logos/bazaarvoice.png",
    points: [
      {
        text: "I conceived and built Tips, where customers of retailers and brands trade tips and get recognized by their peers and by the brand.",
      },
      {
        text: "The same work included Facebook apps for ratings, stories, and questions.",
      },
      {
        text: "Social Deployer, which took a GitHub commit to an autoscaled environment on Amazon EC2.",
      },
    ],
    shots: [
      { src: "/images/work/screenshots/social-deployer-0.png", alt: "Social Deployer" },
      ...shots("bazaarvoice-tips", 5, "Bazaarvoice Tips"),
    ],
  },
  {
    years: "2008 to 2012",
    title: "Google",
    role: "Google Creative Lab",
    tags: ["consumer"],
    logo: "/images/logos/google.png",
    points: [
      {
        label: "Getting American Business Online",
        href: "http://www.gybo.com/",
        text: "Google's program to get businesses online. It was the largest Google App Engine app at the time, in 33 countries, with a layout engine so a local team could adapt the site to a state or a country.",
      },
      {
        label: "Android 4 launch",
        text: "Worldwide retail training for the Android 4 and Galaxy Nexus launch, with a quiz, results reporting, and a site internationalized to every Google market.",
      },
      {
        label: "YouTube World View",
        href: "http://youtube.com/worldview",
        text: "Citizens put questions to world leaders, including Barack Obama, David Cameron, and Angela Merkel. It was the first use of the YouTube Live API, and the live interviews were watched by millions of people.",
      },
      {
        label: "Google's 10th birthday in Germany",
        href: "http://www.10jahregoogle.de/",
        text: "An interactive site for Google's work over the previous decade in Germany. Built in a weekend, advertised on German television.",
      },
    ],
    shots: [
      ...shots("google-getting-american-business-online", 1, "Getting American Business Online"),
      ...shots("google-android-4-launch", 1, "Android 4 launch"),
      ...shots("youtube-world-view", 1, "YouTube World View"),
      ...shots("google-10th-birthday-germany", 1, "Google's 10th birthday in Germany"),
      ...shots("google-getting-american-business-online", 3, "Getting American Business Online").slice(1),
      ...shots("google-android-4-launch", 3, "Android 4 launch").slice(1),
      ...shots("youtube-world-view", 4, "YouTube World View").slice(1),
      ...shots("google-10th-birthday-germany", 2, "Google's 10th birthday in Germany").slice(1),
    ],
  },
  {
    years: "2010 to 2011",
    title: "I'm Everyone",
    role: "Founder",
    tags: ["consumer"],
    logo: "/images/logos/imeveryone.png",
    body: "Realtime, threaded, anonymous discussions. No logins: each person in a thread got an animal avatar. It reached the front page of Hacker News. The site later closed, because it needed moderation to stay safe.",
    shots: shots("im-everyone", 3, "I'm Everyone"),
  },
  {
    years: "2009 to 2010",
    title: "Credit Suisse",
    role: "Low-latency trading engineer",
    tags: ["finance"],
    logo: "/logos/credit-suisse.svg",
    body: "Co-located index arbitrage for high-frequency trading. Mainly low-level Linux kernel tuning and network engineering.",
  },
  {
    years: "2008 to 2009",
    title: "Man Group",
    role: "Linux architect",
    tags: ["finance", "infrastructure"],
    logo: "/logos/man-group.svg",
    body: "Linux architect for the world's largest listed hedge fund.",
  },
  {
    years: "2006 to 2008",
    title: "IBM Global Services",
    role: "IBM Linux Services",
    tags: ["infrastructure"],
    logo: "/logos/ibm.svg",
    body: "Built a system to audit and resolve privilege revalidation for 75,000 people's user accounts. Led a team of six to build the Telstra Enterprise Data Warehouse for one of the largest companies in Asia.",
  },
  {
    years: "2003 to 2005",
    title: "Red Hat",
    role: "Trainer and consultant",
    tags: ["infrastructure"],
    logo: "/images/logos/redhat.png",
    body: "Linux and Python trainer and consultant. My name is in the default sudoers file.",
    shots: shots("linux-and-python", 1, "Red Hat"),
  },
  {
    years: "2003 to 2008",
    title: "Technical journalism",
    role: "Feature writer and columnist",
    showTitle: true,
    logos: [
      { src: "/images/logos/apc.png", alt: "APC" },
      { src: "/images/logos/pca.gif", alt: "PC Authority" },
    ],
    body: "Feature writer at APC, columnist at PC Authority, 40,000 words of Linux Pocketbook.",
    shots: shots("feature-writer-apc-magazine", 4, "Technical journalism", "jpeg"),
  },
  {
    years: "1999 to 2003",
    title: "Cybersource",
    role: "Technical specialist",
    tags: ["infrastructure"],
    logo: "/images/logos/cybersource-white-on-black.png",
    body: "Built the Small Business Linux Server appliance, a turnkey local email / file sharing device, and created a five-day Red Hat administration course the company later sold the rights to.",
  },
  {
    years: "1996",
    title: "Doom: The Path",
    role: "A Doom II level",
    showTitle: true,
    tags: ["consumer"],
    href: "https://www.doomworld.com/idgames/?id=7427",
    logo: "/images/logos/doom.png",
    body: "A Doom II level, built at 15. Deep water, filling tanks, floating platforms, and custom textures and sounds.",
    shots: shots("doom-the-path", 4, "Doom: The Path"),
  },
];
