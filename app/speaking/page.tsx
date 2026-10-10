import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking and advisory · Mike MacCana",
  description: "Talks on onchain finance, plus training, retainers, and expert-witness work.",
};

export default function SpeakingPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Speaking and advisory</p>
        <h2>Talks</h2>
        <p>
          I speak about onchain finance to the people who run markets and the people who build them. The
          subject is how products clear, settle, and hold risk on a public ledger. This includes managed funds,
          prediction markets, options, and lending.
        </p>
        <p>
          I lead Solana content for <a href="https://www.youtube.com/@Quicknode">Quicknode on YouTube</a>. On the
          Solana Foundation channel I co-created and presented the{" "}
          <a href="https://www.youtube.com/watch?v=amAq-WHAFs8">2024 Developer Bootcamp</a>, watched over 330,000
          times. I have also taught Solana Fall School, taught for{" "}
          <a href="https://www.youtube.com/watch?v=x7OoYpoWAVM">TURBIN3</a>, and published with Helius. A set of
          those talks is collected{" "}
          <a href="https://www.youtube.com/playlist?list=PLkCOPM6TVt0Rp_kQYEoOCyqj-Y-2bjLvv">in one playlist</a>.
        </p>
        <p>
          I created the Solana Foundation training program. It has been taught from blockchain clubs in Romania
          to Ivy League universities in the US, and the blockchain training I maintained was the highest-retention
          content on <a href="https://solana.com">solana.com</a>.
        </p>
        <p>
          <a className="cta" href="mailto:mike.maccana@gmail.com?subject=Speaking">
            Book me to speak
          </a>
        </p>
        <h3>What I&apos;ve been talking about recently</h3>
        <ul className="points">
          <li>
            How financial products, such as equities exchanges, options trading, and lending markets, work as onchain
            programs (&lsquo;smart contracts&rsquo;).
          </li>
          <li>Securely handling assets onchain.</li>
          <li>
            What changes when finance moves from monolithic assets, market hours, and humans to fractionalized, 24/7
            global, and agentic trading.
          </li>
        </ul>
        <h3>Conferences</h3>
        <ul className="rows">
          <li>
            <span className="when">2026</span>
            <span>Solar (Solana China). &ldquo;Operating a Parimutuel Betting Market.&rdquo;</span>
          </li>
          <li>
            <span className="when">2026</span>
            <span>Solana Fall School. &ldquo;Building a Managed Fund.&rdquo;</span>
          </li>
          <li>
            <span className="when">2026</span>
            <span>Solana Accelerate, Miami. &ldquo;How to get Everything you Ever Wanted.&rdquo;</span>
          </li>
          <li>
            <span className="when">2025</span>
            <span>Solana Breakpoint, Colosseum Stage. &ldquo;Smart contract basics.&rdquo;</span>
          </li>
          <li>
            <span className="when">2024</span>
            <span>Solana Breakpoint, Colosseum Stage. &ldquo;Smart contract basics.&rdquo;</span>
          </li>
          <li>
            <span className="when">2023</span>
            <span>Solana Breakpoint. &ldquo;Solana basics for Everyone.&rdquo;</span>
          </li>
          <li>
            <span className="when">2018</span>
            <span>Odessa JS. &ldquo;Deploying your JS app in 2018.&rdquo;</span>
          </li>
          <li>
            <span className="when">2017</span>
            <span>Digicert Cryptography Forum. &ldquo;The webcrypto API.&rdquo;</span>
          </li>
          <li>
            <span className="when">2015</span>
            <span>Node Interactive. &ldquo;NPM Everywhere.&rdquo;</span>
          </li>
          <li>
            <span className="when">2012</span>
            <span>Norton Rose Fulbright. Open source licensing and the law.</span>
          </li>
        </ul>
        <h3>Advisory</h3>
        <p>For teams putting these ideas into practice:</p>
        <ul className="points">
          <li>I train teams working on onchain markets, credit, and anything else that moves money.</li>
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
