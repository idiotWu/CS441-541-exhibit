# Development Guidelines

## Environment Setup

1. Install node.js (18 or 20): https://nodejs.org/en/download
2. Clone this repository and `cd` to the root
3. Install dependencies using
   ```bash
   npm install
   ```
4. Start a local server using
   ```bash
   npm run dev
   ```
5. Visit http://localhost:5173 for development build.

## Project Layout

```
src
├── assets                          # static assets: images, fonts, etc.
├── atoms.ts                        # global states (atoms) defined with jotai
├── components                      # the collection of UI components
│   ├── example                     # an example component
│   │   ├── example.module.scss     # stylesheet for the component (defined as a css module)
│   │   ├── example.tsx             # react component definition, the major code should go here
│   │   └── index.ts                # main entry for the component
│   └── index.ts                    # main entry for all components. ALWAYS add an export when creating a new component
├── constants                       # the collection of constant/configuration variables
│   └── index.ts                    # main entry for the contants
├── interfaces                      # the collection of type/interface definitions
│   └── index.ts                    # main entry for the interfaces
├── main.module.scss                # stylesheet for the main app
└── main.tsx                        # main app
```

## Conventions

1. The filename should always be in kebab case. For example, `src/components/my-map`.
2. Each component directory should contain at least a component definition module (`[comp-name]/[comp-name].tsx`), an SCSS stylesheet (`[comp-name]/[comp-name].module.scss`), and an export entry (`index.ts`).
3. Always remember to add an export to the main entry of the collection when adding modules into it. Typically, we use `export * from './[module-name]'` to export all contents from the module, but you can also specify the named exports via `export { something } from './[module-name]'`.
4. Prefer importing from the path aliases. For example, use `import { something } from '@components'` instead of `import { something } from '../components'`
