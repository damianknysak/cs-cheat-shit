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
  lineups: Lineup[]
}

export interface GameMap {
  id: string
  name: string
  /** Path under /public, e.g. "/images/maps/mirage.jpg". Leave undefined to show a placeholder. */
  thumbnail?: string
  positions: MapPosition[]
}
