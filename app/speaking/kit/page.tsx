import type { Metadata } from "next";
import { LinkedHeading } from "../../linked-heading";
import { amazonUrl, bookUrl } from "../../structured-data";

export const metadata: Metadata = {
  title: "Speaker kit · Mike MacCana",
  description: "Bios, photos, talk topics and video for event organizers booking Mike MacCana.",
};

const shortBio =
  "Mike MacCana is the author of Building Financial Software on Solana and leads Solana and finance content at Quicknode. Before blockchain he worked at Man Group, Credit Suisse, CMC Invest, Google and Red Hat.";

const mediumBio =
  "Mike MacCana teaches how financial products work on blockchains. He is the author of Building Financial Software on Solana, which reached #3 in Amazon's Hot New Releases for Financial Engineering in its first weeks, and leads Solana and finance content at Quicknode. Before Quicknode he ran developer education at the Solana Foundation, where he created a training program taught at Ivy League universities and co-created the Solana Developer Bootcamp, watched over 330,000 times. Before blockchain he worked at Man Group, Credit Suisse, CMC Invest, Google and Red Hat. He lives in New York City.";

const longBio = [
  "Mike MacCana teaches how financial products work on blockchains, to the people who run markets and the people who build them.",
  "He is the author of Building Financial Software on Solana, a guide of more than 300 pages with ten complete, tested programs covering exchanges, lending markets, managed funds, options and perpetual futures, written so that analysts, product managers and finance professionals can follow it as well as engineers. The book is free to read at solanabook.org, available in paperback from Amazon and Barnes & Noble, and reached #3 in Amazon's Hot New Releases for Financial Engineering in its first weeks.",
  "At Quicknode he leads Solana and finance content for its YouTube channel (144K subscribers) and maintains the most comprehensive open library of tested Solana programs. Before Quicknode he ran developer education at the Solana Foundation, creating a four-day training program taught at Ivy League universities and co-creating the Solana Developer Bootcamp, watched over 330,000 times. His Portal Payments project won the RWA and Messaging prizes at the Solana Sandstorm hackathon.",
  "Before blockchain, Mike worked across finance and technology at Man Group, Credit Suisse, CMC Invest, Google and Red Hat, and created python-docx, the Python library for Word documents. He has spoken at technology conferences for more than 25 years, including Breakpoint, Accelerate and the DigiCert Cryptography Forum. He lives in New York City.",
];

const topics = [
  {
    title: "How real financial products work onchain",
    summary:
      "Exchanges, lending markets and managed funds, taken apart to show how money moves, how prices are set and how each product defends itself against attack. For finance and technology audiences alike, no code required.",
  },
  {
    title: "Markets that never close",
    summary:
      "What changes when finance moves from monolithic assets, market hours and human traders to fractional, 24/7, global and agentic trading, and what that means for exchanges, brokers and regulators.",
  },
  {
    title: "Tokenized stocks and stablecoins in practice",
    summary:
      "How tokenized equities and dollar stablecoins such as USDC settle, how they are held and what institutions need to check before using them.",
  },
  {
    title: "Encrypted onchain transactions",
    summary: "Private trades, votes and payments on a public ledger, using multi-party computation.",
  },
  {
    title: "Workshop: build a financial program on Solana",
    summary:
      "Hands-on sessions from two hours to four days, building an escrow, an exchange or a lending market from the book's tested programs.",
  },
];

const videos = [
  { label: "Launch video for Building Financial Software on Solana", href: "https://x.com/mikemaccana/status/2109982407520608506" },
  { label: "Quicknode video on the book", href: "https://x.com/QuicknodeSolana/status/2117623794869076152" },
  { label: "Solana Developer Bootcamp 2024 (330,000+ views)", href: "https://www.youtube.com/watch?v=amAq-WHAFs8" },
  { label: "Playlist of talks", href: "https://www.youtube.com/playlist?list=PLkCOPM6TVt0Rp_kQYEoOCyqj-Y-2bjLvv" },
];

const coverage = [
  {
    label: "Solana Compass: Quicknode's free book builds ten finance programs",
    href: "https://solanacompass.com/news/building-financial-software-on-solana-quicknodes-free-book-builds-ten-finance-programs-from-escrow-to-perps",
  },
  { label: "Quicknode: Building Financial Software on Solana", href: "https://www.quicknode.com/blog/building-financial-software-on-solana" },
];

export default function SpeakerKitPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Speaking</p>
        <h1 className="page-title">Speaker kit</h1>
        <p>
          Everything an organizer needs for a program, a website or an introduction. Use any of it as is, or{" "}
          <a href="mailto:mike.maccana@gmail.com?subject=Speaker%20kit">ask for something else</a>.
        </p>

        <LinkedHeading title="Photos" level="h3">Photos</LinkedHeading>
        <div className="kit-photos">
          <a href="/images/mike.jpg" download>
            <img src="/images/mike.jpg" alt="Mike MacCana" width={1200} height={1200} loading="lazy" />
            <span className="when">Headshot, 1200 × 1200</span>
          </a>
          <a href="/images/quicknode-speaking-1.jpg" download>
            <img
              src="/images/quicknode-speaking-1.jpg"
              alt="Mike MacCana speaking"
              width={1920}
              height={1080}
              loading="lazy"
            />
            <span className="when">On stage, 1920 × 1080</span>
          </a>
          <a href="/images/book-cover.png" download>
            <img
              src="/images/book-cover.png"
              alt="Cover of Building Financial Software on Solana"
              width={716}
              height={915}
              loading="lazy"
            />
            <span className="when">Book cover, 716 × 915</span>
          </a>
        </div>

        <LinkedHeading title="Bio" level="h3">Bio</LinkedHeading>
        <p className="when">One line</p>
        <p>Mike MacCana is the author of Building Financial Software on Solana.</p>
        <p className="when">Short, 34 words</p>
        <p>{shortBio}</p>
        <p className="when">Medium, 94 words</p>
        <p>{mediumBio}</p>
        <p className="when">Long</p>
        {longBio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <LinkedHeading title="Talk topics" level="h3">Talk topics</LinkedHeading>
        <ul className="points">
          {topics.map((topic) => (
            <li key={topic.title}>
              <strong>{topic.title}.</strong> {topic.summary}
            </li>
          ))}
        </ul>
        <p>
          Formats: keynote or talk (10 to 45 minutes), fireside chat, panel, podcast, and workshops. Every talk can be
          pitched to a finance, technology or general audience.
        </p>

        <LinkedHeading title="Video" level="h3">Video</LinkedHeading>
        <ul className="points">
          {videos.map((video) => (
            <li key={video.href}>
              <a href={video.href}>{video.label}</a>
            </li>
          ))}
        </ul>

        <LinkedHeading title="Selected stages" level="h3">Selected stages</LinkedHeading>
        <p>
          Breakpoint (2023, 2024 and 2025), Accelerate, Superteam USA, Solana Fall School, TURBIN3, Node Interactive,
          DigiCert Cryptography Forum, DockerConf and Reject.JS. The full list is on the{" "}
          <a href="/speaking">speaking page</a>.
        </p>

        <LinkedHeading title="Book and coverage" level="h3">Book and coverage</LinkedHeading>
        <p>
          <a href={bookUrl}>Building Financial Software on Solana</a> is free to read online and available in{" "}
          <a href={amazonUrl}>paperback</a>. It reached #3 in Amazon&apos;s Hot New Releases for Financial
          Engineering.
        </p>
        <ul className="points">
          {coverage.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <LinkedHeading title="Contact" level="h3">Contact</LinkedHeading>
        <p>
          <a className="cta" href="mailto:mike.maccana@gmail.com?subject=Speaking">
            Book me to speak
          </a>
          {" "}
          <a className="cta" href="https://x.com/mikemaccana">
            @mikemaccana on X
          </a>
        </p>
      </section>
    </main>
  );
}
