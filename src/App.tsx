import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import GameWindowPage from './pages/GameWindowPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GameWindowPage />} />
      </Routes>
    </div>
  );
}

export default App;
