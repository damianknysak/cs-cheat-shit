# cs-cheat-shit

Responsywna, czysto kliencka apka pokazująca insta smoki / lineupy dla CS2.
Wybierasz mapę → klikasz numer swojego spawnu → widzisz lineupy (Insta Window,
Insta Top Mid) osobno, każdy z krokami (obrazek + opis + klawisze).

Build: React + Vite + TypeScript + Tailwind CSS + React Router (`HashRouter`,
żeby routing działał na GitHub Pages bez dodatkowej konfiguracji serwera).

## Uruchomienie lokalnie

Wymagany Node **22.12+** (patrz `.nvmrc`).

```bash
nvm use          # albo: nvm install
npm install
npm run dev
```

```bash
npm run build     # build produkcyjny do dist/
npm run preview   # podgląd builda
npm run lint
```

## Struktura danych

Wszystkie mapy i lineupy są w [src/data/maps.ts](src/data/maps.ts), typy w
[src/types.ts](src/types.ts).

```
GameMap
 └─ positions: MapPosition[]      // np. "Spawn 5" (number: 5)
     └─ lineups: Lineup[]         // np. "Insta smoke - Window"
         └─ steps: LineupStep[]   // np. Pozycja / Cel / Rzut
```

Żeby dodać nową mapę lub spawn, wystarczy rozszerzyć tablicę `maps` w
`src/data/maps.ts` - UI (grid map, siatka numerów spawnów, karty lineupów)
obsłuży to automatycznie. Numer spawnu (pole `number`) to to, co widać na
siatce wyboru w [SpawnSelector](src/components/SpawnSelector.tsx).

## Obrazki (placeholdery -> prawdziwe screeny)

Na razie **wszystkie obrazki to placeholdery** (patrz
[src/components/PlaceholderImage.tsx](src/components/PlaceholderImage.tsx)) -
świadomie nie użyliśmy screenów z cudzych filmów z YouTube (kwestia praw
autorskich). Żeby podmienić na prawdziwy obrazek:

1. Wrzuć plik do `public/images/<mapa>/<nazwa>.jpg` (np.
   `public/images/mirage/window-1.jpg`).
2. W `src/data/maps.ts` ustaw pole `image` danego kroku (`LineupStep`) na
   `images/mirage/window-1.jpg` (bez `/` na początku).

Ścieżki obrazków przechodzą przez [withBase()](src/lib/paths.ts), który
doklei aktualny `base` z `vite.config.ts` (`/cs-cheat-shit/`) - dlatego w
danych **nie** zaczynamy ścieżki od `/`. Jeśli `image` nie jest ustawione,
komponent sam pokaże placeholder - nie trzeba nic więcej zmieniać w kodzie.

Dane lineupów dla Mirage (spawny 1-10, każdy: insta window + insta top mid) to
**przykładowa treść do zweryfikowania** - podane pozycje/cele warto
sprawdzić/doprecyzować przed realnym użyciem w grze.

Wyjątki (nie placeholdery):

- `public/images/mirage/t-spawn-select.webp` (siatka do wyboru spawnu) -
  pobrany z `assets.csnades.gg` na wyraźną prośbę i decyzję właściciela repo,
  świadomie przyjęte ryzyko praw autorskich do cudzej grafiki.
- `public/images/maps/*.png` (ikonki map na stronie głównej) - oficjalne
  ikony map CS2 wyciągnięte z plików gry (depot), pobrane z
  [MurkyYT/cs2-map-icons](https://github.com/MurkyYT/cs2-map-icons). To
  assety Valve, nie cudza kompozycja - inna kategoria ryzyka niż powyższy
  punkt.

## Deploy (GitHub Pages)

Push na `main` uruchamia [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
który buduje apkę i publikuje `dist/` na GitHub Pages przez GitHub Actions.
W ustawieniach repo (Settings → Pages) source musi być ustawiony na
**GitHub Actions**.

`vite.config.ts` ma ustawione `base: '/cs-cheat-shit/'` - jeśli repo zmieni
nazwę, trzeba zaktualizować tę wartość.
