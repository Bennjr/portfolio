import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./global.css"
import { Desktop } from './pages/desktop';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <Desktop />
    </StrictMode>,
  );
}
