
import React, { useState, useEffect, useRef, ReactNode } from 'react';

function useMediaQuery(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatch(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return match;
}

type Props = {
  base: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
  scaleSmall?: number;
  scaleLarge?: number;
};

export default function BlogSwitchFitImage({
  base,
  alt = "",
  className = "",
  children,
  scaleSmall = 0.3,
  scaleLarge = 0.5,
}: Props) {
  const isSmall = useMediaQuery("(max-width: 480px)");
  const imgRef = useRef<HTMLImageElement>(null);
  const [pixelWidth, setPixelWidth] = useState<number | null>(null);
  const scale = isSmall ? scaleSmall : scaleLarge;

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const applyWidth = () => {
      const natural = img.naturalWidth;
      setPixelWidth(Math.round(natural * scale));
    };

    if (img.complete) applyWidth();
    else {
      img.addEventListener("load", applyWidth);
      return () => img.removeEventListener("load", applyWidth);
    }
  }, [isSmall]);


  const src = `${base}${isSmall ? "@S.webp" : "@L.webp"}`;

  return (
    <div className='image'>
      <figure>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={pixelWidth}
          style={{
            display: "block",
            height: "auto",
            maxWidth: "100%",
          }}
          className={className}
        />
        {children && (
          <figcaption className="visually-hidden">
            {children}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
