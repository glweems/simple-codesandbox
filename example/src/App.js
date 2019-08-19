import React, { Component } from 'react';

import CodeSandbox from 'simple-codesandbox';

export default function App(): any {
  return (
    <div>
      <section>
        <h2>Views</h2>
        <CodeSandbox height="50vh" />
        {/* <CodeSandbox sandboxId="react-peekaboo-navbar-0nsms" view="editor" />
        <CodeSandbox sandboxId="react-peekaboo-navbar-0nsms" view="preview" /> */}
      </section>
      <section>
        <h2>Auto resize</h2>
        {/* <CodeSandbox autoResize={false} />
        <CodeSandbox autoResize={false} /> */}
      </section>
    </div>
  );
}
