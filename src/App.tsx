import { HashRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard'
import { Browse } from './routes/Browse'
import { SimPlayer } from './routes/SimPlayer'
import { KeynotePlayer } from './routes/KeynotePlayer'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/c/:mapel/:kelas" element={<Browse />} />
        <Route path="/sim/:id" element={<SimPlayer />} />
        <Route path="/k/:id" element={<KeynotePlayer />} />
      </Routes>
    </HashRouter>
  )
}
