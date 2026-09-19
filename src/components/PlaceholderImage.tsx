interface PlaceholderImageProps {
  image?: string
  label: string
  className?: string
}

export function PlaceholderImage({ image, label, className = '' }: PlaceholderImageProps) {
  if (image) {
    return (
      <img
        src={image}
        alt={label}
        className={`aspect-video w-full rounded-lg object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex aspect-video w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-700 bg-neutral-900 text-center ${className}`}
    >
      <span className="text-2xl">🖼️</span>
      <span className="px-2 text-xs font-medium text-neutral-500">Placeholder - podmień obrazek</span>
      <span className="px-2 text-[10px] text-neutral-600">{label}</span>
    </div>
  )
}
