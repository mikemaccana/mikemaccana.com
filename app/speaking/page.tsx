import type { Metadata } from "next";
import { LinkedHeading } from "../linked-heading";
import { SpeakingList } from "./speaking-list";

export const metadata: Metadata = {
  title: "Speaking and advisory · Mike MacCana",
  description: "Talks on onchain finance, plus training, retainers, and expert-witness work.",
};

export default function SpeakingPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Speaking and advisory</p>
        <h1 className="page-title">Talks</h1>
        <p>
          I speak about onchain finance to the people who run markets and the people who build them. The
          subject is how products clear, settle, and hold risk on a public ledger. This includes exchanges, managed funds,
          prediction markets, options, and lending.
        </p>
        <p>
          I lead Solana content for <a href="https://www.youtube.com/@Quicknode">Quicknode on YouTube</a> (144K
          subscribers). I
          created the{" "}
          <a href="https://github.com/solana-developers/professional-education">Solana Foundation training program</a>,
          taught from blockchain clubs in Romania to Ivy League
          universities in the US. On their channel I co-created and presented the{" "}
          <a href="https://www.youtube.com/watch?v=amAq-WHAFs8">2024 Developer Bootcamp</a>, watched over 330,000
          times, and the blockchain training I maintained was the highest-retention content on{" "}
          <a href="https://solana.com">solana.com</a>. I have also taught Solana Fall School, taught for{" "}
          <a href="https://www.youtube.com/watch?v=x7OoYpoWAVM">TURBIN3</a>, and published written and video
          content for <a href="https://www.helius.dev/blog/solana-pda">Helius</a>. A set of those talks is
          collected{" "}
          <a href="https://www.youtube.com/playlist?list=PLkCOPM6TVt0Rp_kQYEoOCyqj-Y-2bjLvv">in one playlist</a>.
        </p>
        <p>
          <a className="cta" href="mailto:mike.maccana@gmail.com?subject=Speaking">
            Book me to speak
          </a>
        </p>
        <LinkedHeading title="What I've been talking about recently" level="h3">
          What I&apos;ve been talking about recently
        </LinkedHeading>
        <ul className="points">
          <li>
            How financial products, such as equities exchanges, options trading, and lending markets, work as onchain
            programs (&lsquo;smart contracts&rsquo;).
          </li>
          <li>Encrypted onchain transactions using MPC and Arcium.</li>
          <li>
            What changes when finance moves from monolithic assets, market hours, and humans to fractionalized, 24/7
            global, and agentic trading.
          </li>
        </ul>
        <LinkedHeading title="Talks and appearances" level="h3">Talks and appearances</LinkedHeading>
        <p>
          This is a small selection of talks from the last 25 years.
        </p>
        <SpeakingList />
        <LinkedHeading title="Advisory" level="h3">Advisory</LinkedHeading>
        <p>For teams putting these ideas into practice:</p>
        <ul className="points">
          <li>I train teams working on onchain markets, credit, and derivatives.</li>
          <li>I work as an advisor and a fractional CTO, including blockchain strategy advisory.</li>
          <li>I take expert-witness work when a matter depends on how financial software behaves.</li>
        </ul>
        <p>
          <a className="cta" href="mailto:mike.maccana@gmail.com?subject=Advisory">
            Get in touch
          </a>
        </p>
      </section>
    </main>
  );
}
