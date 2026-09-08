"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function ProjectScreenshots({ title, images, priority = false }: {
  title: string;
  images: string[];
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const move = (direction: number) => setActive((current) => (current + direction + images.length) % images.length);
  const close = () => dialog.current?.close();

  if (!images.length) return null;

  return (
    <>
      <div className="project-screenshots">
        <button className="project-cover screenshot-open" aria-label={`Enlarge ${title} screenshot ${active + 1}`} onClick={(event) => {
          opener.current = event.currentTarget;
          dialog.current?.showModal();
        }}>
          <Image className="project-cover-image" src={images[active]} alt={`${title} screenshot ${active + 1}`} fill priority={priority} sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw" />
        </button>
        {images.length > 1 && (
          <div className="screenshot-controls" aria-label={`${title} screenshots`}>
            <button type="button" className="screenshot-arrow" onClick={() => move(-1)} aria-label="Previous screenshot" title="Previous screenshot">&#8592;</button>
            <span aria-live="polite">{active + 1} / {images.length}</span>
            <button type="button" className="screenshot-arrow" onClick={() => move(1)} aria-label="Next screenshot" title="Next screenshot">&#8594;</button>
          </div>
        )}
      </div>
      <dialog ref={dialog} className="screenshot-dialog" aria-label={`${title} image viewer`} onClose={() => opener.current?.focus()} onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}>
        <div className="screenshot-viewer">
          <header><p>{title}</p><button autoFocus className="screenshot-arrow" onClick={close} aria-label="Close image viewer" title="Close">&#215;</button></header>
          <div className="screenshot-full"><Image src={images[active]} alt={`${title} screenshot ${active + 1}`} fill sizes="95vw" /></div>
          {images.length > 1 && <nav className="viewer-controls" aria-label="Image navigation">
            <button className="screenshot-arrow" onClick={() => move(-1)} aria-label="Previous screenshot" title="Previous screenshot">&#8592;</button>
            <span aria-live="polite">{active + 1} / {images.length}</span>
            <button className="screenshot-arrow" onClick={() => move(1)} aria-label="Next screenshot" title="Next screenshot">&#8594;</button>
          </nav>}
        </div>
      </dialog>
    </>
  );
}
