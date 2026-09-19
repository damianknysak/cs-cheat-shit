import type { MapPosition } from '../types'
import { withBase } from '../lib/paths'

interface SpawnImageSelectorProps {
  image: string
  positions: MapPosition[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export function SpawnImageSelector({ image, positions, selectedId, onSelect }: SpawnImageSelectorProps) {
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800">
        <img
          src={withBase(image)}
          alt="Spawny na T Spawn - kliknij swój numer"
          className="aspect-video w-full object-cover"
        />
        {positions.map((position) => {
          if (!position.coords) return null
          const isSelected = position.id === selectedId
          return (
            <button
              key={position.id}
              onClick={() => onSelect(position.id)}
              aria-label={`Wybierz ${position.name}`}
              aria-pressed={isSelected}
              style={{ left: `${position.coords.xPct}%`, top: `${position.coords.yPct}%` }}
              className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 transition sm:h-14 sm:w-14 ${
                isSelected
                  ? 'border-amber-400 bg-amber-400/20 ring-2 ring-amber-300'
                  : 'border-transparent hover:border-amber-300/70 hover:bg-black/20'
              }`}
            />
          )
        })}
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        Kliknij na swój numer spawnu na zdjęciu powyżej, żeby zobaczyć lineupy.
      </p>
    </div>
  )
}
