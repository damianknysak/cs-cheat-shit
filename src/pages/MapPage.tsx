import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getMapById } from '../data/maps'
import { LineupCard } from '../components/LineupCard'
import { SpawnSelector } from '../components/SpawnSelector'

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
          <div className="mt-4">
            <SpawnSelector
              positions={map.positions}
              selectedId={selectedPosition?.id ?? null}
              onSelect={setSelectedPositionId}
            />
          </div>

          {selectedPosition && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-neutral-200">{selectedPosition.name}</h2>
              <div className="mt-3 flex flex-col gap-4">
                {selectedPosition.lineups.map((lineup) => (
                  <LineupCard key={lineup.id} lineup={lineup} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
