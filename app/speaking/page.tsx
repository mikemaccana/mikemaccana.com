import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking · Mike MacCana",
  description: "Talks on onchain finance.",
};

export default function SpeakingPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">02 Speaking</p>
        <h2>Talks</h2>
        <p>
          I speak about onchain finance to two rooms: people who run markets, and people who build them. The
          subject is how products clear, settle, and hold risk on a public ledger.
        </p>
        <p>
          To book a talk, email{" "}
          <a href="mailto:mike.maccana@gmail.com?subject=Speaking">mike.maccana@gmail.com</a>.
        </p>
        <p>
          <a className="cta" href="mailto:mike.maccana@gmail.com?subject=Speaking">
            Book me to speak
          </a>
        </p>
        <h3>Live Speaking</h3>
        <ul className="rows">
          <li>
            <span className="when">Markets</span>
            <span>Tokenized equities and oracle-free options.</span>
          </li>
          <li>
            <span className="when">Structure</span>
            <span>24/7 market structure and settlement.</span>
          </li>
          <li>
            <span className="when">TradFi</span>
            <span>What traditional finance can borrow from onchain market design.</span>
          </li>
        </ul>
        <h3>Conferences</h3>
        <ul className="rows">
          <li>
            <span className="when">2026</span>
            <span>Solana Accelerate, Miami. &ldquo;How to get Everything you Ever Wanted.&rdquo;</span>
          </li>
          <li>
            <span className="when">2025</span>
            <span>Solana Breakpoint.</span>
          </li>
          <li>
            <span className="when">2024</span>
            <span>Solana Breakpoint.</span>
          </li>
          <li>
            <span className="when">2023</span>
            <span>Solana Breakpoint.</span>
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
            <span>
              Node Interactive, Portland, December 8-9. The Node Foundation&apos;s flagship event. &ldquo;NPM
              Everywhere.&rdquo;
            </span>
          </li>
          <li>
            <span className="when">2012</span>
            <span>Norton Rose Fulbright. Open source licensing and the law.</span>
          </li>
        </ul>
        <h3>On video</h3>
        <p>
          Most of the speaking is on video. I lead Solana content for{" "}
          <a href="https://www.youtube.com/@Quicknode">Quicknode on YouTube</a>: managed funds, prediction markets,
          options, and lending. More video is on{" "}
          <a href="https://x.com/QuicknodeSolana">Quicknode Solana</a>. On the Solana Foundation channel I
          co-created and presented the{" "}
          <a href="https://www.youtube.com/watch?v=amAq-WHAFs8">2024 Developer Bootcamp</a>. I have also taught Solana Fall School, taught for{" "}
          <a href="https://www.youtube.com/watch?v=x7OoYpoWAVM">TURBIN3</a>, and published with Helius, including the
          introduction of <a href="https://solanakite.org/">Kite</a>. A set of those talks is collected{" "}
          <a href="https://www.youtube.com/playlist?list=PLkCOPM6TVt0Rp_kQYEoOCyqj-Y-2bjLvv">in one playlist</a>.
        </p>
      </section>
    </main>
  );
}
