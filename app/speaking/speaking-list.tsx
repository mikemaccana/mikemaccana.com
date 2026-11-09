"use client";

import { useState } from "react";

type SpeakingItem = {
  year: string;
  event: string;
  talk?: string[];
  note?: string;
  tags: string[];
  location: string;
};

const tagOrder = ["Finance", "Blockchain", "Cryptography", "Front end", "Back end"];

const appearances: SpeakingItem[] = [
  {
    year: "2026",
    event: "The Latest Development podcast",
    note: "Guest appearance: cryptography, Arcium, and Solana adoption",
    tags: ["Cryptography", "Blockchain", "Finance"],
    location: "Utah",
  },
  {
    year: "2026",
    event: "Superteam USA",
    talk: ["Encrypted onchain elections"],
    tags: ["Blockchain", "Finance", "Cryptography"],
    location: "Miami",
  },
  {
    year: "2026",
    event: "Solar (Solana China)",
    talk: ["Operating a Parimutuel Betting Market"],
    tags: ["Blockchain", "Finance"],
    location: "Chinese-speaking countries *",
  },
  {
    year: "2026",
    event: "Solana Fall School",
    talk: ["Building a Managed Fund"],
    tags: ["Blockchain", "Finance"],
    location: "USA *",
  },
  {
    year: "2026",
    event: "Accelerate",
    talk: ["How to get Everything you Ever Wanted"],
    tags: ["Blockchain", "Finance"],
    location: "Miami",
  },
  {
    year: "2025",
    event: "Breakpoint",
    talk: ["How to Build Anything You Want on Solana"],
    note: "Colosseum Stage",
    tags: ["Blockchain", "Finance"],
    location: "Abu Dhabi",
  },
  {
    year: "2025",
    event: "Solana Australia",
    talk: ["How to Build Anything You Want on Solana"],
    tags: ["Blockchain", "Finance"],
    location: "Melbourne *",
  },
  {
    year: "2025",
    event: "TURBIN3",
    talk: ["Build an Escrow app in Rust"],
    tags: ["Blockchain", "Finance", "Back end"],
    location: "USA *",
  },
  {
    year: "2025",
    event: "Solana Hack Day, Solana ANZ",
    talk: ["Builder Journey: Mike MacCana"],
    tags: ["Blockchain", "Finance"],
    location: "Melbourne",
  },
  {
    year: "2024",
    event: "Breakpoint",
    talk: ["Build your first Solana program in 30 minutes"],
    note: "Colosseum Stage",
    tags: ["Blockchain", "Finance", "Back end"],
    location: "Singapore",
  },
  {
    year: "2024",
    event: "Web3 Builders Alliance",
    talk: ["Reveal: a practical solution to IRS form 8300 Reporting"],
    tags: ["Blockchain", "Finance", "Cryptography"],
    location: "USA *",
  },
  {
    year: "2023",
    event: "Breakpoint (MC, Developer stage)",
    talk: ["Solana basics for Everyone"],
    tags: ["Blockchain", "Finance"],
    location: "Amsterdam",
  },
  {
    year: "2022",
    event: "Tech AM Report podcast",
    note: "Guest appearance as Portal co-founder: blockchain payments and fundraising",
    tags: ["Blockchain", "Finance"],
    location: "USA",
  },
  {
    year: "2018",
    event: "Odessa JS",
    talk: ["Deploying your JS app"],
    tags: ["Back end"],
    location: "Odesa, Ukraine",
  },
  {
    year: "2017",
    event: "DigiCert Cryptography Forum",
    talk: ["The webcrypto API"],
    tags: ["Cryptography", "Front end"],
    location: "Las Vegas",
  },
  {
    year: "2016",
    event: "LNUG",
    talk: ["Deploying and running Node apps"],
    tags: ["Back end"],
    location: "London, UK",
  },
  {
    year: "2015",
    event: "Hacker News London",
    talk: ["CertSimple: verifying the legal entity behind a public key in minutes not months"],
    tags: ["Cryptography", "Back end"],
    location: "London, UK",
  },
  {
    year: "2015",
    event: "Node Interactive",
    talk: ["NPM Everywhere", "Practical browser npm"],
    tags: ["Front end", "Back end"],
    location: "Portland, Oregon",
  },
  {
    year: "2014",
    event: "EpicFEL",
    talk: ["Happiness through simplicity"],
    tags: ["Front end"],
    location: "London, UK",
  },
  {
    year: "2014",
    event: "DockerConf",
    note: "Not recorded",
    tags: ["Back end"],
    location: "London, UK",
  },
  {
    year: "2014",
    event: "JSFest",
    talk: ["Browse like Xerces the God King of the Persians"],
    tags: ["Front end", "Back end"],
    location: "San Francisco",
  },
  {
    year: "2013",
    event: "Reject.JS",
    talk: ["Welcome our new ES5 Overlords"],
    tags: ["Front end"],
    location: "Berlin",
  },
  {
    year: "2012",
    event: "Norton Rose Fulbright",
    talk: ["Open source licensing and the law"],
    tags: ["Back end"],
    location: "London, UK",
  },
  {
    year: "2001",
    event: "SAGE-AU/AUUG Summer Conference",
    talk: ["VMware"],
    tags: ["Back end"],
    location: "Hobart, Australia",
  },
];

export function SpeakingList() {
  const [selected, setSelected] = useState<string[]>([]);
  const visible = selected.length === 0
    ? appearances
    : appearances.filter((appearance) => appearance.tags.some((tag) => selected.includes(tag)));

  function toggle(tag: string) {
    setSelected((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  }

  return (
    <>
      <div className="tag-bar" role="group" aria-label="Filter talks and appearances by tag">
        <span className="tag-label">Filter</span>
        {tagOrder.map((tag) => (
          <button
            key={tag}
            type="button"
            className={selected.includes(tag) ? "tag-button is-on" : "tag-button"}
            aria-pressed={selected.includes(tag)}
            onClick={() => toggle(tag)}
          >
            {tag}
          </button>
        ))}
        {selected.length > 0 ? (
          <button type="button" className="tag-clear" onClick={() => setSelected([])}>
            Clear all
          </button>
        ) : null}
      </div>
      <p className="speaking-key">* Online</p>
      <ul className="rows speaking-rows">
        <li className="speaking-head" aria-hidden="true">
          <span>Year</span>
          <span>Event</span>
          <span>Talk</span>
          <span>Tags</span>
          <span>Location</span>
        </li>
        {visible.map((appearance) => (
          <li key={`${appearance.year}-${appearance.event}`}>
            <span className="when">{appearance.year}</span>
            <span>{appearance.event}</span>
            <span>
              {appearance.talk?.map((title, index) => (
                <span key={title}>
                  {index > 0 ? " and " : null}
                  <em>{title}</em>
                </span>
              ))}
              {appearance.note ? <>{appearance.talk?.length ? " " : null}{appearance.note}</> : null}
            </span>
            <span className="speaking-tags">
              {tagOrder.filter((tag) => appearance.tags.includes(tag)).map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={selected.includes(tag) ? "tag-button is-on" : "tag-button"}
                  aria-pressed={selected.includes(tag)}
                  onClick={() => toggle(tag)}
                >
                  {tag}
                </button>
              ))}
            </span>
            <span className="speaking-city">{appearance.location}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
