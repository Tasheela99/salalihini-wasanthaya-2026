'use client';

import { faHandPointer, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CSSProperties, ReactNode } from 'react';
import { useRef, useState } from 'react';
import styles from './Banner.module.css';

export type BannerProps = {
  title?: string;
  message?: string;
  backgroundImageSrc?: string;
  videoSrc?: string;
  videoButtonLabel?: string;
  children?: ReactNode;
  defaultOpen?: boolean;
  onClose?: () => void;
  className?: string;
};

export default function Banner({
  title,
  message,
  backgroundImageSrc,
  videoSrc,
  videoButtonLabel = 'Watch Video',
  children,
  defaultOpen = true,
  onClose,
  className,
}: Readonly<BannerProps>) {
  const [open, setOpen] = useState(defaultOpen);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const dragStateRef = useRef<{
    dragging: boolean;
    startX: number;
    startY: number;
    startOffsetX: number;
    startOffsetY: number;
  }>({
    dragging: false,
    startX: 0,
    startY: 0,
    startOffsetX: 0,
    startOffsetY: 0,
  });

  if (!open) return null;

  const rootClassName = [styles.banner, className].filter(Boolean).join(' ');
  const cssVars =
    ({
      ['--banner-dx' as unknown as string]: `${offset.x}px`,
      ['--banner-dy' as unknown as string]: `${offset.y}px`,
    } satisfies CSSProperties) as CSSProperties;

  const contentStyle =
    backgroundImageSrc
      ? (
          {
            backgroundImage: `linear-gradient(var(--color-accent-dark), var(--color-accent-dark)), url(${backgroundImageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          } satisfies CSSProperties
        )
      : undefined;

  const clampAndSetOffset = (candidateX: number, candidateY: number) => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    const rect = dialogEl.getBoundingClientRect();
    const deltaX = candidateX - offset.x;
    const deltaY = candidateY - offset.y;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const margin = 8;

    let clampedDeltaX = deltaX;
    let clampedDeltaY = deltaY;

    const candidateLeft = rect.left + clampedDeltaX;
    const candidateRight = rect.right + clampedDeltaX;
    const candidateTop = rect.top + clampedDeltaY;
    const candidateBottom = rect.bottom + clampedDeltaY;

    if (candidateLeft < margin) clampedDeltaX += margin - candidateLeft;
    if (candidateRight > vw - margin) clampedDeltaX -= candidateRight - (vw - margin);
    if (candidateTop < margin) clampedDeltaY += margin - candidateTop;
    if (candidateBottom > vh - margin) clampedDeltaY -= candidateBottom - (vh - margin);

    setOffset((prev) => ({ x: prev.x + clampedDeltaX, y: prev.y + clampedDeltaY }));
  };

  return (
    <dialog
      ref={dialogRef}
      className={rootClassName}
      style={cssVars}
      open
      aria-label={title ?? 'Announcement'}
      onPointerMove={(e) => {
        const st = dragStateRef.current;
        if (!st.dragging) return;

        const nextX = st.startOffsetX + (e.clientX - st.startX);
        const nextY = st.startOffsetY + (e.clientY - st.startY);
        clampAndSetOffset(nextX, nextY);
      }}
      onPointerUp={(e) => {
        const st = dragStateRef.current;
        if (!st.dragging) return;
        dragStateRef.current.dragging = false;

        const dialogEl = dialogRef.current;
        if (!dialogEl) return;
        try {
          dialogEl.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }}
      onPointerCancel={(e) => {
        const st = dragStateRef.current;
        if (!st.dragging) return;
        dragStateRef.current.dragging = false;

        const dialogEl = dialogRef.current;
        if (!dialogEl) return;
        try {
          dialogEl.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }}
    >
      <div className={styles.inner}>
        <div className={styles.content} style={contentStyle}>
          <div className={styles.topRow}>
            <div className={styles.text}>
              {title ? <h2 className={styles.title}>{title}</h2> : null}
              {message ? <p className={styles.message}>{message}</p> : null}
              {children}
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.dragHandle}
                aria-label="Drag popup"
                onPointerDown={(e) => {
                  if (e.button !== 0) return;

                  const dialogEl = dialogRef.current;
                  if (!dialogEl) return;

                  // Prevent scrolling/selection while dragging from the handle
                  e.preventDefault();

                  dragStateRef.current = {
                    dragging: true,
                    startX: e.clientX,
                    startY: e.clientY,
                    startOffsetX: offset.x,
                    startOffsetY: offset.y,
                  };

                  try {
                    dialogEl.setPointerCapture(e.pointerId);
                  } catch {
                    // ignore
                  }
                }}
              >
                <FontAwesomeIcon icon={faHandPointer} />
              </button>

              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close popup"
                onClick={() => {
                  const el = videoRef.current;
                  if (el) {
                    try {
                      el.pause();
                      el.currentTime = 0;
                    } catch {
                      // ignore
                    }
                  }
                  setShowVideo(false);
                  setOpen(false);
                  onClose?.();
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>

          {videoSrc ? (
            <div className={styles.videoSection}>
              <button
                type="button"
                className={styles.videoButton}
                onClick={() => {
                  setShowVideo(true);
                  // Ensure play happens after the element is mounted
                  queueMicrotask(() => {
                    const el = videoRef.current;
                    if (!el) return;
                    void el.play().catch(() => {
                      // ignore
                    });
                  });
                }}
              >
                {videoButtonLabel}
              </button>

              {showVideo ? (
                <div className={styles.videoWrap}>
                  <video
                    ref={videoRef}
                    className={styles.video}
                    src={videoSrc}
                    controls
                    playsInline
                  >
                    <track
                      kind="captions"
                      src="/videos/captions-en.vtt"
                      srcLang="en"
                      label="English"
                      default
                    />
                  </video>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
