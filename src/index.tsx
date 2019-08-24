/* eslint-disable no-restricted-syntax */
import * as React from 'react';
import * as queryString from 'query-string';
import {
  BorderProperty,
  BorderRadiusProperty,
  OverflowProperty,
  HeightProperty,
  WidthProperty
} from 'csstype';

/* Embed Options

The options shown in the embed modal are not all options available. We need a
new UI for the share model to reflect these options, in the meantime you can
find them here.

Option           Description / Values     -  Default

autoresize      -  0/1                    -  0      -  Automatically resize the embed to the content (only works on Medium).
codemirror      -  0/1                    -  0      -  Use CodeMirror editor instead of Monaco (decreases embed size significantly).
editorsize      -  number                 -  50     -  Size in percentage of editor.
eslint          -  0/1                    -  0      -  Use eslint (increases embed size significantly).
expanddevtools  -  0/1                    -  0      -  Start with the devtools (console) open.
fontsize        -  number (in px)         -  14     -  Font size of editor
forcerefresh    -  0/1                    -  0      -  Force a full refresh of frame after every edit.
hidenavigation  -  0/1                    -  0      -  Hide the navigation bar of the preview.
highlights      -  [num, num, num]        -  null   -  Which lines to highlight (only works in CodeMirror)
initialpath     --  string                -  /      -  Which url to initially load in address bar
module          --  opened files          -  null
                    Multiple paths comma separated are allowed,
                    in that case we show them as tabs | path to module (starting with `/`) */
// type ZeroOrOne = number;

interface SandboxQuery<Type> {
  codeMirror?: Type;
  editorSize?: number;
  eslint?: Type;
  expandDevTools?: Type;
  fontSize?: number;
  forceRefresh?: Type;
  hideNavigation?: Type;
  highlights?: null | number[];
  initialPath?: string;
  moduleView?: string;
  previewWindow?: 'console' | 'tests' | 'browser';
  runOnClick?: boolean;
  verticalLayout?: Type;
  view?: 'split' | 'preview' | 'editor';
  module?: string | string[];
}

interface CodeSandbox extends SandboxQuery<boolean> {
  sandbox?: string;
  git?: [string, string, string, string?];
  title?: string;
  className?: string;
  style?: StyleSheetList;
  width?: WidthProperty<string>;
  height?: HeightProperty<string>;
  border?: BorderProperty<string>;
  borderRadius?: BorderRadiusProperty<string>;
  overflow?: OverflowProperty;
}

const boolToNum = (bool: boolean): 1 | 0 => (bool ? 1 : 0);

const CodeSandbox = ({
  sandbox = 'github/glweems/empty-sandbox/tree/dev/',
  git,
  title = 'code sandbox embed',
  codeMirror = false,
  editorSize = 50,
  eslint = false,
  expandDevTools = false,
  fontSize = 14,
  forceRefresh = false,
  hideNavigation = false,
  highlights,
  initialPath = '/',
  module = '/',
  moduleView = '/',
  previewWindow = 'browser',
  runOnClick = false,
  verticalLayout = false,
  view = 'split',
  className,
  style,
  width = '100%',
  height = '50vh',
  border = '0',
  borderRadius = '4px'
}: CodeSandbox): JSX.Element => {
  const base = `https://codesandbox.io/embed`;

  const options = queryString
    .stringify({
      codeMirror: boolToNum(codeMirror),
      editorSize,
      eslint: boolToNum(eslint),
      expandDevTools: boolToNum(expandDevTools),
      fontSize,
      forceRefresh: boolToNum(forceRefresh),
      hideNavigation: boolToNum(hideNavigation),
      highlights,
      initialPath,
      module,
      moduleView,
      previewWindow,
      runOnClick: boolToNum(runOnClick),
      verticalLayout: boolToNum(verticalLayout),
      view
    })
    .toLowerCase();

  const url = (): string => {
    if (git !== undefined) {
      const [host, username, repo, branch = 'master'] = git;
      return `${base}/${host}/${username}/${repo}/tree/${branch}?${options}`;
    }
    return `${base}/${sandbox}?${options}`;
  };

  return (
    <iframe
      src={url()}
      title={title}
      className={className}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      style={{
        width,
        height,
        border,
        borderRadius,
        ...style
      }}
    />
  );
};

interface EditSandboxButton {
  git: [string, string, string, string?];
}

export const EditSandboxButton = ({
  git: [host, username, repo, branch = 'master']
}: EditSandboxButton): JSX.Element => (
  <a
    href={`https://codesandbox.io/s/${host}/${username}/${repo}/tree/${branch}?fontsize=14`}
  >
    <img
      alt="Edit react-navbar-scroller"
      src="https://codesandbox.io/static/img/play-codesandbox.svg"
    />
  </a>
);

export default CodeSandbox;
