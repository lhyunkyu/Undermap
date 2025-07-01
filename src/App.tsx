import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Start } from './pages/Start';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
