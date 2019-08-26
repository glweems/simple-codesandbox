# simple-codesandbox

> easily display configurable codesandbox iframe

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f642e363e7c54eb7bbe43a01923e8ee8)](https://app.codacy.com/app/glweems/simple-codesandbox?utm_source=github.com&utm_medium=referral&utm_content=glweems/simple-codesandbox&utm_campaign=Badge_Grade_Settings)
[![NPM](https://img.shields.io/npm/v/simple-codesandbox.svg)](https://www.npmjs.com/package/simple-codesandbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-codesandbox
```

or

```bash
npm install --save simple-codesandbox
```

## Embed Options

The options shown in the embed modal are not all options available. We need a
new UI for the share model to reflect these options, in the meantime you can
find them here.

| Option           | Description                                                                        | Values                                 | Default                              |
| ---------------- | ---------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------ |
| `codeMirror`     | Use CodeMirror editor instead of Monaco (decreases embed size significantly).      | `boolean`                              | `false`                              |
| `editorSize`     | Size in percentage of editor.                                                      | `number`                               | `50`                                 |
| `eslint`         | Use eslint (increases embed size significantly).                                   | `boolean`                              | `false`                              |
| `expandDevTools` | Start with the devtools (console) open.                                            | `boolean`                              | `false`                              |
| `fontSize`       | Font size of editor                                                                | `number (in px)`                       | `14`                                 |
| `forceRefresh`   | Force a full refresh of frame after every edit.                                    | `boolean`                              | `false`                              |
| `hideNavigation` | Hide the navigation bar of the preview.                                            | `boolean`                              | `false`                              |
| `highlights`     | Which lines to highlight (only works in CodeMirror)                                | `comma separated list of line numbers` |                                      |
| `initialPath`    | Which url to initially load in address bar                                         | `string`                               | `/`                                  |
| `moduleView`     | Evaluate the file that is open in the editor.                                      | `boolean`                              | `false`                              |
| `previewWindow`  | Which preview window to open by default                                            | `console` / `tests` / `browser`        | `browser`                            |
| `runOnClick`     | Only load the preview when the user says so.                                       | `boolean`                              | `false`                              |
| `verticalLayout` | Whether to show the editor and preview vertically.                                 | `boolean`                              | `false`                              |
| `view`           | Which view to open by default                                                      | `editor` / `split` / `preview`         | `split`, `preview` for small screens |
| `module`         | Which module to open by default. Multiple paths comma separated are allowed, in that case we show them as tabs | path to module (starting with `/`)   | entry path |

## Example Embeds

These are some examples of embeds, based on their properties.

## Usage

```tsx
const App = () => (
  <CodeSandbox sandbox="github/glweems/empty-sandbox" />
)
```

### Smallest Embed

```tsx
const App = () => (
  <CodeSandbox sandbox="github/glweems/empty-sandbox" codeMirror />
)
```

## License

MIT © [glweems](https://github.com/glweems)
