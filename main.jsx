// importar el create root
import { App } from './src/App'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('app'))
root.render(<App />)
