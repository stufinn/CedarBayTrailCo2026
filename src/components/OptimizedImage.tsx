import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  onClick?: () => void;
  webpSrcSet?: string;
  fallbackSrcSet?: string;
  webpType?: string;
  fallbackType?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '100vw',
  onClick,
  webpSrcSet,
  fallbackSrcSet,
  webpType = 'image/webp',
  fallbackType = 'image/jpeg',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <picture>
      {webpSrcSet && (
        <source srcSet={webpSrcSet} type={webpType} sizes={sizes} />
      )}
      {fallbackSrcSet && (
        <source srcSet={fallbackSrcSet} type={fallbackType} sizes={sizes} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          !isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
        sizes={sizes}
      />
    </picture>
  );
}
