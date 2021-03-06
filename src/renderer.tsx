// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

declare var document: any;

document.write("TypeScript baby!");

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);