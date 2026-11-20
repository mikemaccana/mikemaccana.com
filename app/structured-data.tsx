// Schema.org structured data. Google reads this to connect the person, the
// book and the profiles below into one entity, which is what a knowledge
// panel is built from.

const siteUrl = "https://mikemaccana.com";

export const personId = `${siteUrl}/#person`;
export const bookId = `${siteUrl}/book#book`;

// Fill these in once the profiles exist, then they are added to sameAs:
// - wikidataId: the Q number of the Wikidata item, for example "Q123456789"
// - amazonAuthorUrl: the Amazon Author Central page, for example
//   "https://www.amazon.com/stores/author/B0XXXXXXXX"
const wikidataId = "";
const amazonAuthorUrl = "";

export const isbn = "9798997472207";
export const bookUrl = "https://solanabook.org";
export const amazonUrl = "https://www.amazon.com/dp/B0HMJSSB95";
export const barnesAndNobleUrl =
  "https://www.barnesandnoble.com/w/building-financial-software-on-solana-mike-maccana/1151680819";

const sameAs = [
  "https://x.com/mikemaccana",
  "https://www.linkedin.com/in/mikemaccana",
  "https://github.com/mikemaccana",
  "https://t.me/mikemaccana",
  wikidataId ? `https://www.wikidata.org/wiki/${wikidataId}` : null,
  amazonAuthorUrl || null,
].filter((url): url is string => Boolean(url));

const quicknode = {
  "@type": "Organization",
  name: "Quicknode",
  url: "https://www.quicknode.com",
};

export const person = {
  "@type": "Person",
  "@id": personId,
  name: "Mike MacCana",
  url: siteUrl,
  image: `${siteUrl}/images/mike.jpg`,
  jobTitle: "Blockchain finance educator",
  description:
    "Mike MacCana writes and speaks about how financial products work on blockchains. He is the author of Building Financial Software on Solana.",
  worksFor: quicknode,
  homeLocation: { "@type": "Place", name: "New York City" },
  knowsAbout: [
    "Solana",
    "Blockchain",
    "Decentralized finance",
    "Financial software",
    "Cryptography",
    "Software engineering",
  ],
  award: ["Solana Sandstorm hackathon: RWA prize and Messaging prize, for Portal Payments"],
  sameAs,
};

export const book = {
  "@type": "Book",
  "@id": bookId,
  name: "Building Financial Software on Solana",
  alternateName: ["The Solana Book", "The Solana Finance Book"],
  author: { "@id": personId },
  publisher: quicknode,
  datePublished: "2026-10-13",
  inLanguage: "en",
  isbn,
  bookFormat: "https://schema.org/Paperback",
  url: `${siteUrl}/book`,
  image: `${siteUrl}/images/book-cover.png`,
  description:
    "How real financial products work as programs on Solana: exchanges, lending markets, funds, options, perpetual futures and more, with ten complete, tested programs.",
  license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  sameAs: [bookUrl, amazonUrl, barnesAndNobleUrl],
  offers: [
    { "@type": "Offer", url: amazonUrl, availability: "https://schema.org/InStock" },
    { "@type": "Offer", url: barnesAndNobleUrl, availability: "https://schema.org/InStock" },
  ],
};

export const website = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mike MacCana",
  publisher: { "@id": personId },
};

export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
