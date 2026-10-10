"use client";

import { Fragment, useState } from "react";
import type { WorkItem } from "./works";

const tagOrder = ["finance", "consumer", "crypto", "blockchain", "AI", "infrastructure", "Y Combinator", "exit"];

function withLinks(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return match ? (
      <a key={index} href={match[2]}>
        {match[1]}
      </a>
    ) : (
      part
    );
  });
}

function orderedTags(works: WorkItem[]): string[] {
  const present = new Set(works.flatMap((work) => work.tags ?? []));
  const known = tagOrder.filter((tag) => present.has(tag));
  const extra = [...present].filter((tag) => !tagOrder.includes(tag));
  return [...known, ...extra];
}

export function WorkList({ works }: { works: WorkItem[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const tags = orderedTags(works);
  const visible =
    selected.length === 0
      ? works
      : works.filter((work) => work.tags?.some((tag) => selected.includes(tag)));

  function toggle(tag: string) {
    setSelected((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  }

  return (
    <>
      <div className="tag-bar" role="group" aria-label="Filter">
        {tags.length > 0 ? <span className="tag-label">Filter</span> : null}
        {tags.map((tag) => (
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

      {visible.map((work) => {
        const shots = work.shots ?? [];
        const shown = shots.every((shot) => shot.phone) ? shots : shots.slice(0, 2);
        const shotClass = shown.some((shot) => shot.wide)
          ? "shots wide"
          : shown.length === 1
            ? "shots single"
            : shown.length > 1 && shown.every((shot) => shot.phone)
              ? "shots phones"
              : "shots";
        const logoItems =
          work.logos ?? (work.logo ? [{ src: work.logo, alt: work.showTitle ? "" : work.title }] : []);
        const logoImages = logoItems.map((item) => {
          const compact =
            logoItems.length === 1 &&
            (item.src === "/logos/daisie.png" ||
              item.src === "/images/logos/bazaarvoice.png" ||
              item.src === "/images/logos/redhat.png");
          const logoClass =
            item.src === "/images/logos/imeveryone.png"
              ? "logo"
              : item.src === "/images/logos/boomsaas.png"
                ? "logo mid"
                : compact
                  ? "logo compact"
                  : item.src.startsWith("/images/logos/")
                    ? "logo legacy"
                    : "logo";
          return (
            <img
              key={item.src}
              className={logoClass}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
          );
        });
        const logo =
          logoImages.length > 1 ? <div className="logo-row">{logoImages}</div> : (logoImages[0] ?? null);
        return (
          <article className="work" key={`${work.years}-${work.title}`}>
          <p className="when">{work.years}</p>
          {logoItems.length > 0 && !work.showTitle ? (
            work.href ? (
              <a className="logo-link" href={work.href}>
                {logo}
              </a>
            ) : (
              logo
            )
          ) : (
            <>
              {logo}
              <h3>{work.href ? <a href={work.href}>{work.title}</a> : work.title}</h3>
            </>
          )}
          {work.role ? <p className="role">{work.role}</p> : null}
          {work.tags ? (
            <p className="tags">
              {work.tags.map((tag, index) => (
                <span key={tag}>
                  {index > 0 ? " · " : null}
                  <button
                    type="button"
                    className={selected.includes(tag) ? "tag-button is-on" : "tag-button"}
                    aria-pressed={selected.includes(tag)}
                    onClick={() => toggle(tag)}
                  >
                    {tag}
                  </button>
                </span>
              ))}
            </p>
          ) : null}
          {work.body ? (
            <p>
              {work.body.split("\n").map((line, index) => (
                <Fragment key={index}>
                  {index > 0 ? <br /> : null}
                  {withLinks(line)}
                </Fragment>
              ))}
            </p>
          ) : null}
          {work.points ? (
            <ul className="points">
              {work.points.map((point) => (
                <li key={point.label ?? point.text}>
                  {point.label ? (
                    <>
                      {point.href ? <a href={point.href}>{point.label}</a> : point.label}
                      {". "}
                    </>
                  ) : null}
                  {point.text}
                </li>
              ))}
            </ul>
          ) : null}
          {shown.length > 0 ? (
            <div className={shotClass}>
              {shown.map((shot) => (
                <img
                  key={shot.src}
                  className={shot.phone ? "phone" : undefined}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ) : null}
          </article>
        );
      })}
    </>
  );
}
