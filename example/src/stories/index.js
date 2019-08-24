import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import CodeSandbox from 'simple-codesandbox';

// const Params = () => (

// )

storiesOf('Documentation', module).add('params', () => (
  <Welcome showApp={linkTo('CodeSandbox')} />
));

storiesOf('Config', module)
  .add('Default component', () => <CodeSandbox />)
  .add('Auto Resize Disabled', () => (
    <CodeSandbox autoResize={false} overflow="" />
  ))
  .add('Default', () => (
    <CodeSandbox github={{ username: 'glweems', repo: 'empty-sandbox' }} />
  ))
  .add('Code Mirror', () => <CodeSandbox codeMirror />)
  .add('Eslint', () => <CodeSandbox eslint />)
  .add('Expand Dev Tools', () => <CodeSandbox expandDevTools />)
  .add('Force Refresh', () => <CodeSandbox forceRefresh />)
  .add('Hide Navigation', () => <CodeSandbox hideNavigation />)
  .add('Console', () => <CodeSandbox previewWindow="console" />)
  .add('Testing', () => <CodeSandbox previewWindow="tests" />)
  .add('Run On Click', () => <CodeSandbox runOnClick />)
  .add('Vertical ', () => <CodeSandbox verticalLayout />)
  .add('Editor', () => <CodeSandbox view="editor" />)
  .add('Preview', () => <CodeSandbox view="preview" />);
