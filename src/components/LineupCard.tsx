import type { Lineup } from '../types'
import { GrenadeBadge } from './GrenadeBadge'
import { PlaceholderImage } from './PlaceholderImage'

export function LineupCard({ lineup }: { lineup: Lineup }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-50">{lineup.name}</h3>
          <p className="text-sm text-neutral-400">
            {lineup.fromPosition} → {lineup.toPosition}
          </p>
        </div>
        <GrenadeBadge type={lineup.grenadeType} />
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {lineup.steps.map((step, index) => (
          <div key={step.id} className="flex flex-col gap-2">
            <PlaceholderImage image={step.image} label={`${lineup.name} — ${step.title}`} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {index + 1}. {step.title}
              </p>
              <p className="text-sm text-neutral-300">{step.description}</p>
              {step.keys && step.keys.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {step.keys.map((key) => (
                    <kbd
                      key={key}
                      className="rounded border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 text-[11px] font-medium text-neutral-200"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {lineup.notes && <p className="text-xs italic text-neutral-500">{lineup.notes}</p>}
    </article>
  )
}
