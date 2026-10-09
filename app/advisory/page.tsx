import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory · Mike MacCana",
  description: "Training, retainers, and expert-witness work.",
};

export default function AdvisoryPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">03 Advisory</p>
        <h2>Training, retainers, testimony</h2>
        <p>Clients hire me for this after hearing me speak.</p>
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
