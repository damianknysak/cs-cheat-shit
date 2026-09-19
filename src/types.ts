export type GrenadeType = 'smoke' | 'flash' | 'molotov' | 'he' | 'decoy'

export interface LineupStep {
  id: string
  title: string
  description: string
  /** Path under /public, e.g. "/images/mirage/window-1.jpg". Leave undefined to show a placeholder. */
  image?: string
  keys?: string[]
}

export interface Lineup {
  id: string
  name: string
  grenadeType: GrenadeType
  fromPosition: string
  toPosition: string
  difficulty?: 'easy' | 'medium' | 'hard'
  notes?: string
  steps: LineupStep[]
}

export interface MapPosition {
  id: string
  name: string
  /** Spawn number shown on the spawn-select grid, e.g. 5. */
  number: number
  /** Center of this spawn's marker on `GameMap.spawnSelectImage`, in % of image width/height. */
  coords?: { xPct: number; yPct: number }
  lineups: Lineup[]
}

export interface GameMap {
  id: string
  name: string
  /** Path under /public, e.g. "/images/maps/mirage.jpg". Leave undefined to show a placeholder. */
  thumbnail?: string
  /** Path under /public to a spawn-select image with numbered spawns (see MapPosition.coords). */
  spawnSelectImage?: string
  positions: MapPosition[]
}
