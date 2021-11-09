import ReactDOM from 'react-dom';

import './index.css';
// This syntax is not valid in a regualr js
import App from './App';

// Only do this once to the render to root. The rest components are just a simple import.
ReactDOM.render(<App />, document.getElementById('root'));
