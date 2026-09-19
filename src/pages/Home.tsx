import { Link } from 'react-router-dom'
import { maps } from '../data/maps'
import { PlaceholderImage } from '../components/PlaceholderImage'

export function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-neutral-50 sm:text-3xl">Wybierz mapę</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Insta smoki i lineupy dla poszczególnych spawnów.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {maps.map((map) => {
          const lineupCount = map.positions.reduce((sum, p) => sum + p.lineups.length, 0)
          const isEmpty = lineupCount === 0

          return (
            <Link
              key={map.id}
              to={`/mapa/${map.id}`}
              className={`group flex flex-col gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 transition hover:border-neutral-600 ${
                isEmpty ? 'opacity-60' : ''
              }`}
            >
              <PlaceholderImage image={map.thumbnail} label={map.name} className="aspect-square" />
              <div>
                <p className="font-semibold text-neutral-100">{map.name}</p>
                <p className="text-xs text-neutral-500">
                  {isEmpty ? 'Wkrótce' : `${lineupCount} lineup${lineupCount === 1 ? '' : 'ów'}`}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
