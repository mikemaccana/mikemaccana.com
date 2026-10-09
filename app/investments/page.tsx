import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investments · Mike MacCana",
  description: "Angel investments in onchain finance.",
};

export default function InvestmentsPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">04 Investments</p>
        <h2>Angel investments</h2>
        <p>I back companies in onchain finance.</p>
        <h3>
          <a href="https://www.pyra.fi/">Pyra</a>
        </h3>
        <p>
          Never sell, and still buy things with a card. Your assets stay invested. The card spends credit against them.
          Pyra was formerly Quartz.
        </p>
      </section>
    </main>
  );
}
