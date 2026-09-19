import type { GrenadeType } from '../types'

const GRENADE_LABELS: Record<GrenadeType, { label: string; className: string; icon: string }> = {
  smoke: { label: 'Smoke', className: 'bg-neutral-700 text-neutral-100', icon: '💨' },
  flash: { label: 'Flash', className: 'bg-yellow-600/80 text-yellow-50', icon: '⚡' },
  molotov: { label: 'Molotov', className: 'bg-orange-600/80 text-orange-50', icon: '🔥' },
  he: { label: 'HE', className: 'bg-green-700/80 text-green-50', icon: '💣' },
  decoy: { label: 'Decoy', className: 'bg-stone-600/80 text-stone-50', icon: '🎯' },
}

export function GrenadeBadge({ type }: { type: GrenadeType }) {
  const { label, className, icon } = GRENADE_LABELS[type]
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}>
      <span>{icon}</span>
      {label}
    </span>
  )
}
