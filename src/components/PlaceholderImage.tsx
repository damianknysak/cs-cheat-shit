import { withBase } from '../lib/paths'

interface PlaceholderImageProps {
  image?: string
  label: string
  aspectClassName?: string
  fitClassName?: string
  className?: string
}

export function PlaceholderImage({
  image,
  label,
  aspectClassName = 'aspect-video',
  fitClassName = 'object-cover',
  className = '',
}: PlaceholderImageProps) {
  if (image) {
    return (
      <img
        src={withBase(image)}
        alt={label}
        className={`${aspectClassName} ${fitClassName} w-full rounded-lg ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex ${aspectClassName} w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-700 bg-neutral-900 text-center ${className}`}
    >
      <span className="text-2xl">🖼️</span>
      <span className="px-2 text-xs font-medium text-neutral-500">Placeholder - podmień obrazek</span>
      <span className="px-2 text-[10px] text-neutral-600">{label}</span>
    </div>
  )
}
