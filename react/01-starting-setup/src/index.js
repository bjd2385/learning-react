// index.js is the first file that's executed.

import ReactDOM from 'react-dom';

import './index.css'; // This file isn't normally importable, but we have syntactic sugar.
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
