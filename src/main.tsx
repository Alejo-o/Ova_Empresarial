import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

(window as unknown as { __OVA_MOUNTED__?: () => void }).__OVA_MOUNTED__?.();
createRoot(document.getElementById('root')!).render(<App />);
