# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nubble — a React Native 0.72 (bare CLI, not Expo) social feed app written in TypeScript. UI strings are in Portuguese (pt-BR). Package manager is Yarn.

## Commands

```bash
yarn start            # Metro bundler (keep running in its own terminal)
yarn ios              # build & run on iOS simulator (run `bundle install && cd ios && bundle exec pod install` after native dep changes)
yarn android          # build & run on Android device/emulator — requires JDK 17 (Gradle 8.0.1); `.sdkmanrc` pins it, run `sdk env` first
yarn lint             # ESLint — also runs as the husky pre-commit hook, so lint errors block commits
yarn test             # Jest (preset: react-native)
yarn test __tests__/App.test.tsx   # single test file
yarn test -t "name"                # single test by name
npx tsc --noEmit      # type-check (no script defined for it)
```

## Architecture

### Path aliases
Imports use aliases defined in **both** `babel.config.js` (module-resolver) and `tsconfig.json` (`paths`): `@components`, `@hooks`, `@routes`, `@screens`, `@theme`, `@domain`, `@brand`. When adding a new alias, update both files. Each aliased folder has an `index.ts` barrel — new components, hooks, screens and domain exports must be re-exported there to be importable via the alias.

### Import ordering (enforced by ESLint)
`import/order` requires groups separated by blank lines, alphabetized: `react`/`react-native` first → other external packages → `@routes|@screens|@components|@hooks|@theme` → parent/sibling (`./`). Prettier: single quotes, no bracket spacing (`{Foo}`), trailing commas, `arrowParens: avoid`.

### Theming (Shopify Restyle)
`src/theme/theme.ts` defines the single source of design tokens: `palette`, semantic `colors` (`primary`, `background`, `backgroundContrast`, `error`, …), `spacing` keys (`s4`…`s56`) and `borderRadii`. Styling is done through Restyle props rather than `StyleSheet`:
- `Box` / `TouchableOpacityBox` (`src/components/Box`) accept theme-typed props like `mb="s24"`, `backgroundColor="primary"`.
- `Text` wraps Restyle text with a `preset` (`headingLarge`…`paragraphCaptionSmall`) plus `bold`/`semiBold`/`italic` flags that map to Satoshi font files.
- Access raw token values in code via `useAppTheme()` (`@hooks`). `ThemeColors` type is used wherever a prop should accept a color token.
- Convention: static style/prop objects are declared at the bottom of the file with a `$` prefix (`$screen`, `$shadowProps`, `$label`), typed as `BoxProps`/`TextProps`/`ViewStyle`.

### Icons
Each icon is a pair: raw `src/assets/icons/<name>.svg` and a hand-written `<Name>Icon.tsx` component using `react-native-svg` that accepts `IconBase` (`size`, `color`). To be usable it must be registered in `iconRegistry` inside `src/components/Icon/Icon.tsx`; consumers use `<Icon name="heart" color="primary" />` (the `name` type is derived from the registry keys). Passing `onPress` wraps it in a `Pressable`.

### Screens & navigation
- `Screen` component (`src/components/Screen`) is the root wrapper for every screen: handles safe area (via `useAppSafeArea`, min 20px), keyboard avoidance, horizontal padding `s24`, optional `scrollable` and `canGoBack` (renders a "Voltar" back button).
- `src/routes/Routes.tsx` switches between `AuthStack` and `AppStack` using a hardcoded `authenticated` flag (no real auth yet).
- `AppStack` contains `AppTabNavigator` (bottom tabs with a custom `AppTabBar`; tab labels/icons come from `mapScreenToProps.ts`) plus stack screens like `SettingsScreen`.
- Param lists live next to each navigator (`AuthStackParamList`, `AppStackParamList`, `AppTabBottomTabParamList`) and are merged into the global `ReactNavigation.RootParamList` in `navigationType.ts`. Screens type their props with `AuthScreenProps<'X'>`, `AppScreenProps<'X'>` or `AppTabScreenProps<'X'>`. Adding a screen requires: the screen file, export in `src/screens/index.ts`, param list entry, and `Stack.Screen`/`Tab.Screen` registration (plus a `mapScreenToProps` entry for tabs).
- Screens are organized as `src/screens/{auth|app}/<Name>Screen/` with screen-specific subcomponents in a local `components/` folder.

### Forms
Forms use `react-hook-form` + `zod` via `zodResolver`. Each form screen has a sibling `<name>Schema.ts` exporting the zod schema and its inferred type. `FormTextInput` / `FormPasswordInput` wrap the base inputs in a `Controller` and surface `fieldState.error.message`. Submit buttons are typically `disabled={!formState.isValid}` with `mode: 'onChange'`.

### Domain layer
`src/domain/<Entity>/` follows `types.ts` → `<entity>Api.ts` (data source; currently returns mocks from `<entity>ListMock.ts` with an artificial delay) → `<entity>Service.ts` (what the UI calls). Screens consume only the service via `@domain`, so swapping the mock API for a real HTTP client should not affect UI code.
