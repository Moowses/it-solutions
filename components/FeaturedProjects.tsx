"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { featuredProjects } from "@/lib/site-content";

export function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const project = featuredProjects[active];
  const go = (index: number) => setActive((index + featuredProjects.length) % featuredProjects.length);

  return (
    <div className="featured-carousel" role="region" aria-roledescription="carousel" aria-label="Featured projects" tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); go(active + 1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); go(active - 1); }
        if (event.key === "Home") { event.preventDefault(); go(0); }
        if (event.key === "End") { event.preventDefault(); go(featuredProjects.length - 1); }
      }}
      onTouchStart={(event) => { const touch = event.changedTouches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; }}
      onTouchEnd={(event) => {
        if (!touchStart.current) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1));
        touchStart.current = null;
      }}>
      <article className="featured-project" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${featuredProjects.length}: ${project.title}`}>
        <Link className="featured-image" href={`/portfolio#${project.slug}`} aria-label={`Explore ${project.title}`}>
          <Image key={project.image} src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, 65vw" />
        </Link>
        <div className="featured-project-copy"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><ul className="featured-tags">{project.technologies.map((tool) => <li key={tool}>{tool}</li>)}</ul><Link href={`/portfolio#${project.slug}`} className="text-link">Explore project <span aria-hidden="true">↗</span></Link></div>
      </article>
      <div className="carousel-toolbar"><span className="carousel-status" aria-live="polite" aria-atomic="true">{project.title}, project {active + 1} of {featuredProjects.length}</span><div className="carousel-controls"><button type="button" onClick={() => go(active - 1)} aria-label="Previous project">←</button>{featuredProjects.map((item, index) => <button key={item.slug} type="button" className={`carousel-dot${index === active ? " is-selected" : ""}`} aria-label={`Show ${item.title}`} aria-pressed={index === active} onClick={() => go(index)}><span /></button>)}<button type="button" onClick={() => go(active + 1)} aria-label="Next project">→</button></div></div>
    </div>
  );
}
