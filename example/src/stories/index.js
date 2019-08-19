import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import CodeSandbox from 'simple-codesandbox';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('CodeSandbox')} />
));

storiesOf('CodeSandbox', module)
  .add('Default component', () => <CodeSandbox />)
  .add('Auto Resize Disabled', () => (
    <CodeSandbox autoResize={false} overflow="" />
  ))
  .add('Preview View', () => <CodeSandbox view="preview" />)
  .add('Editor View', () => <CodeSandbox view="editor" />)
  .add('Hide Navigation', () => <CodeSandbox hideNavigation />)
  .add('Expand Dev Tools', () => <CodeSandbox expandDevTools />)
  .add('Module View', () => <CodeSandbox moduleView />)
  .add('Show Tests', () => <CodeSandbox previewWindow="tests" />);
