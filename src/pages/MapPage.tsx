import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getMapById } from '../data/maps'
import { LineupCard } from '../components/LineupCard'

export function MapPage() {
  const { mapId } = useParams<{ mapId: string }>()
  const map = mapId ? getMapById(mapId) : undefined
  const [selectedPositionId, setSelectedPositionId] = useState<string | null>(
    map?.positions[0]?.id ?? null,
  )

  if (!map) {
    return <Navigate to="/" replace />
  }

  const selectedPosition =
    map.positions.find((p) => p.id === selectedPositionId) ?? map.positions[0]

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/" className="text-sm text-neutral-400 hover:text-neutral-200">
        ← Wszystkie mapy
      </Link>

      <h1 className="mt-2 text-2xl font-bold text-neutral-50 sm:text-3xl">{map.name}</h1>

      {map.positions.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-neutral-800 bg-neutral-900/40 p-6 text-sm text-neutral-500">
          Lineupy dla tej mapy jeszcze nie zostały dodane.
        </p>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap gap-2">
            {map.positions.map((position) => (
              <button
                key={position.id}
                onClick={() => setSelectedPositionId(position.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  selectedPosition?.id === position.id
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {position.name}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {selectedPosition?.lineups.map((lineup) => (
              <LineupCard key={lineup.id} lineup={lineup} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
