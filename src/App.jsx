import { Route, Routes } from 'react-router-dom';
import './App.css'
import CharacterCard from './components/CharacterCard.jsx'
import MainScreen from './components/MainScreen.jsx'

function App() {
  return (
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/heroes' element={<CharacterCard />} />
      </Routes>
  );
}

export default App

