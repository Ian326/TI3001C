import {Routes, Route, useLocation } from 'react-router-dom';
import NavBarJSX from './components/common/Navbar';
import HomeJSX from './pages/Home';
import InsightsJSX from './pages/Insights';
import GraphicsJSX from './pages/Graphics';
import NotFoundJSX from './pages/NotFound';
import { useTitle } from './hooks/useTitle';

function App() {
  let location = useLocation();
  useTitle(location.pathname);

  return (
    <>
      <NavBarJSX/>

      <Routes>

        <Route path="/"         element={<HomeJSX />}     />
        <Route path="/insights" element={<InsightsJSX />} />
        <Route path="/graphics" element={<GraphicsJSX />} />
        <Route path='*'         element={<NotFoundJSX />} />

      </Routes> 

    </>   
  );
}

export default App;
