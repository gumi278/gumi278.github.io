import React, { useState, useEffect, useRef, ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  scale?: number | string;
  children?: ReactNode;
};

export default function BlogWideImage({
  src,
  alt = "",
  className = "",
  children,
  scale = 0.5,
}: Props) {

  const imgRef = useRef<HTMLImageElement>(null);
  const [pixelWidth, setPixelWidth] = useState<number | null>(null);

  const scaleNum = typeof scale === "string" ? Number(scale) : scale;

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const applyWidth = () => {
      const natural = img.naturalWidth;
      setPixelWidth(Math.round(natural * scaleNum));
    };

    if (img.complete) {
      applyWidth();
    } else {
      img.addEventListener("load", applyWidth);
      return () => img.removeEventListener("load", applyWidth);
    }
  }, [src]);
  
  const { siteConfig } = useDocusaurusContext();
  const { useCDN, cdnBase } = siteConfig.customFields;
  const url = useCDN
    ? `${cdnBase}${src}`
    : `${src}`;

  return (
    <div className='image'>
      <figure>
        <img
          ref={imgRef}
          src={url}
          alt={alt}
          className={className}
          width={pixelWidth ?? undefined}
          style={{
            display: "block",
            height: "auto",
          }}
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
