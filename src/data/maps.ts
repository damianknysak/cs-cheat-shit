import type { GameMap } from '../types'

const mirage: GameMap = {
  id: 'mirage',
  name: 'Mirage',
  positions: [
    {
      id: 't-spawn',
      name: 'T Spawn',
      lineups: [
        {
          id: 'insta-smoke-window',
          name: 'Insta smoke - Window',
          grenadeType: 'smoke',
          fromPosition: 'T Spawn',
          toPosition: 'Window',
          difficulty: 'easy',
          notes:
            'Przykładowy lineup do zweryfikowania i podmiany na własne screeny.',
          steps: [
            {
              id: 'stance',
              title: 'Pozycja',
              description:
                'Stań plecami do drewnianej skrzyni przy wyjściu z T Spawn, dokładnie na linii z rogiem baneru nad wejściem do Window.',
              keys: ['Pozycjonowanie (bez rzutu)'],
            },
            {
              id: 'aim',
              title: 'Cel',
              description:
                'Wyceluj crosshair dokładnie na róg baneru / czubek widocznego elementu nad wejściem do Window.',
            },
            {
              id: 'throw',
              title: 'Rzut',
              description: 'Jump-throw - wyskocz i rzuć w najwyższym punkcie skoku.',
              keys: ['Spacja', 'LPM', 'Smoke'],
            },
          ],
        },
        {
          id: 'insta-smoke-top-mid',
          name: 'Insta smoke - Top Mid',
          grenadeType: 'smoke',
          fromPosition: 'T Spawn',
          toPosition: 'Top Mid',
          difficulty: 'easy',
          notes:
            'Przykładowy lineup do zweryfikowania i podmiany na własne screeny.',
          steps: [
            {
              id: 'stance',
              title: 'Pozycja',
              description:
                'Stań przy murku po lewej stronie wyjścia z T Spawn w stronę Mid, twarzą w kierunku przejścia na Top Mid.',
              keys: ['Pozycjonowanie (bez rzutu)'],
            },
            {
              id: 'aim',
              title: 'Cel',
              description:
                'Wyceluj crosshair na widoczną rurę / krawędź dachu nad wejściem na Top Mid.',
            },
            {
              id: 'throw',
              title: 'Rzut',
              description: 'Jump-throw - wyskocz i rzuć w najwyższym punkcie skoku.',
              keys: ['Spacja', 'LPM', 'Smoke'],
            },
          ],
        },
      ],
    },
  ],
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
