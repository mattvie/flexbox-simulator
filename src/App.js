import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout';
import FlexPage from './Pages/Flex/FlexPage'
import FlexExamples from './Pages/Flex/FlexExamples'
import FlexTest1 from './Pages/FlexTest1'

function App() {
  return (
    <Routes>
      <Route path="/flexbox-simulator" element={<Layout />}>
        <Route index element={<FlexPage />} />
        <Route path={'/'} element={<FlexTest1 />} />
        <Route path={'/simulator'} element={<FlexPage />} />
        <Route path={'/examples'} element={<FlexExamples />} />
      </Route>
    </Routes>
  );
}

export default App;
