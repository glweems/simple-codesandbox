/**
 * @class ExampleComponent
 */

import * as React from 'react';
import * as queryString from 'query-string';
import {
  BorderProperty,
  BorderRadiusProperty,
  OverflowProperty,
  HeightProperty,
  WidthProperty
} from 'csstype';

export type Props = {
  src: string | false;
  sandbox: string;
  title: string;
  autoResize: boolean;
  expandDevTools: boolean;
  fontSize: number;
  hideNavigation: boolean;
  view: undefined | 'preview' | 'editor';
  moduleView: boolean;
  previewWindow: 'tests' | undefined;
  width: WidthProperty<string>;
  height: HeightProperty<string>;
  border: BorderProperty<string>;
  borderRadius: BorderRadiusProperty<string>;
  overflow: OverflowProperty;
  codeMirror: boolean;
};

// const allow = [
//   'geolocation',
//   'microphone',
//   'camera',
//   'midi',
//   'vr',
//   'accelerometer',
//   'gyroscope',
//   'payment',
//   'ambient-light-sensor',
//   'encrypted-media'
// ];
// const sandbox = [
//   'allow-modals',
//   'allow-forms ',
//   'allow-popups',
//   'allow-scripts',
//   'allow-same-origin'
// ];

/*  <iframe src="https://codesandbox.io/embed/react-navbar-scroller-44wd0?
  autoresize=1
  &expanddevtools=1
  &fontsize=14
  &hidenavigation=1
  &view=preview"
   title="react-navbar-scroller"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe> */

const CodeSandbox = ({
  sandbox = 'react-navbar-scroller-44wd0',
  title = sandbox.slice(0, sandbox.length - 6),
  autoResize = true,
  expandDevTools = false,
  fontSize = 14,
  hideNavigation = true,
  view = undefined,
  moduleView = true,
  width = '100%',
  height = '500px',
  border = '0',
  borderRadius = '4px',
  overflow = 'hidden',
  previewWindow = undefined,
  codeMirror = false
}: Props): JSX.Element => {
  const url = `https://codesandbox.io/embed/${sandbox}`;

  const query = queryString
    .stringify({
      fontSize,
      previewWindow,
      view: view || undefined,
      autoResize: autoResize ? 1 : undefined,
      codeMirror: codeMirror ? 1 : undefined,
      moduleview: moduleView ? 1 : undefined,
      hideNavigation: hideNavigation ? 1 : undefined,
      expandDevTools: expandDevTools ? 1 : undefined
    })
    .toLowerCase();

  const config = `${url}?${query}`;

  return (
    <iframe
      src={config}
      title={title}
      style={{ width, height, border, borderRadius, overflow }}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  );
};

export default CodeSandbox;

/*


  const createUrlWithOptions = (): string => {
    const url = `https://codesandbox.io/embed/${sandboxId}`;
    url.concat(`?fontsize=${fontSize}`);
    if (autoResize) url.concat('&autoresize=1');

    return url;
  };

  */
