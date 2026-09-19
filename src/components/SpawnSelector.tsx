import type { MapPosition } from '../types'

interface SpawnSelectorProps {
  positions: MapPosition[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export function SpawnSelector({ positions, selectedId, onSelect }: SpawnSelectorProps) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10 sm:gap-3">
        {positions.map((position) => {
          const isSelected = position.id === selectedId
          return (
            <button
              key={position.id}
              onClick={() => onSelect(position.id)}
              aria-pressed={isSelected}
              className={`flex aspect-square flex-col items-center justify-center rounded-lg border-2 bg-neutral-900 text-xl font-bold transition ${
                isSelected
                  ? 'border-amber-400 text-amber-300'
                  : 'border-neutral-700 text-neutral-300 hover:border-neutral-500'
              }`}
            >
              {position.number}
            </button>
          )
        })}
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        Kliknij numer swojego spawnu, żeby zobaczyć lineupy.
      </p>
    </div>
  )
}
