import type { GameMap, Lineup, MapPosition } from '../types'

const NOTE = 'Przykładowy lineup do zweryfikowania i podmiany na własne screeny.'

function makeInstaSmoke(spawnNumber: number, target: 'Window' | 'Top Mid'): Lineup {
  const targetSlug = target === 'Window' ? 'window' : 'top-mid'
  return {
    id: `insta-smoke-${targetSlug}-spawn-${spawnNumber}`,
    name: `Insta smoke - ${target}`,
    grenadeType: 'smoke',
    fromPosition: `Spawn ${spawnNumber}`,
    toPosition: target,
    difficulty: 'easy',
    notes: NOTE,
    steps: [
      {
        id: 'stance',
        title: 'Pozycja',
        description: `Stań dokładnie na spawnie numer ${spawnNumber}, twarzą w kierunku ${target === 'Window' ? 'Window' : 'Top Mid'}.`,
        keys: ['Pozycjonowanie (bez rzutu)'],
      },
      {
        id: 'aim',
        title: 'Cel',
        description:
          target === 'Window'
            ? 'Wyceluj crosshair dokładnie na róg baneru / czubek widocznego elementu nad wejściem do Window.'
            : 'Wyceluj crosshair na widoczną rurę / krawędź dachu nad wejściem na Top Mid.',
      },
      {
        id: 'throw',
        title: 'Rzut',
        description: 'Jump-throw - wyskocz i rzuć w najwyższym punkcie skoku.',
        keys: ['Spacja', 'LPM', 'Smoke'],
      },
    ],
  }
}

// % pozycja środka numerka na public/images/mirage/t-spawn-select.webp
const SPAWN_COORDS: Record<number, { xPct: number; yPct: number }> = {
  1: { xPct: 80.5, yPct: 89.8 },
  2: { xPct: 15, yPct: 89.8 },
  3: { xPct: 72.25, yPct: 58.2 },
  4: { xPct: 54.5, yPct: 60.9 },
  5: { xPct: 39, yPct: 60.9 },
  6: { xPct: 23.5, yPct: 58.2 },
  7: { xPct: 79.25, yPct: 40.9 },
  8: { xPct: 63.75, yPct: 40.9 },
  9: { xPct: 48.25, yPct: 40.9 },
  10: { xPct: 32.75, yPct: 40.9 },
}

function makeSpawnPosition(spawnNumber: number): MapPosition {
  return {
    id: `spawn-${spawnNumber}`,
    name: `Spawn ${spawnNumber}`,
    number: spawnNumber,
    coords: SPAWN_COORDS[spawnNumber],
    lineups: [makeInstaSmoke(spawnNumber, 'Window'), makeInstaSmoke(spawnNumber, 'Top Mid')],
  }
}

const mirage: GameMap = {
  id: 'mirage',
  name: 'Mirage',
  spawnSelectImage: 'images/mirage/t-spawn-select.webp',
  positions: Array.from({ length: 10 }, (_, i) => makeSpawnPosition(i + 1)),
}

const emptyMap = (id: string, name: string): GameMap => ({ id, name, positions: [] })

export const maps: GameMap[] = [
  mirage,
  emptyMap('dust2', 'Dust II'),
  emptyMap('inferno', 'Inferno'),
  emptyMap('nuke', 'Nuke'),
  emptyMap('overpass', 'Overpass'),
  emptyMap('ancient', 'Ancient'),
  emptyMap('anubis', 'Anubis'),
  emptyMap('vertigo', 'Vertigo'),
  emptyMap('train', 'Train'),
]

export const getMapById = (id: string): GameMap | undefined =>
  maps.find((m) => m.id === id)
