import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout';
import FlexPage from './Pages/Flex/FlexPage'
import FlexExamples from './Pages/Flex/FlexExamples'
import FlexTest from './Pages/FlexTest1'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={'/flexbox-simulator'} element={<FlexPage />} />
        <Route path={'flexbox-simulator/examples'} element={<FlexExamples />} />
        <Route path={'flexbox-simulator/test'} element={<FlexTest />} />
      </Route>
    </Routes>
  );
}

export default App;
