import ReactDOM from 'react-dom/client';
import '../styles/@Globals/index.css';
import GlobalRouters from '../routes/GlobalRouters';

// window.console.warn = () => {};
// window.console.info = () => {};
// window.console.error = () => {};
// window.console.log = () => {};
// window.console.clear();

ReactDOM.createRoot(document.getElementById('root')!).render(<GlobalRouters />);
