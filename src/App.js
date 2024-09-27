import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout';
import FlexPage from './Pages/Flex/FlexPage'
import FlexExamples from './Pages/Flex/FlexExamples'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FlexPage />} />
        <Route path={'/examples'} element={<FlexExamples />} />
        <Route path={'/flexbox-simulator'} element={<FlexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
