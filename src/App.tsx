import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  // Get the base path from Vite's base configuration
  const basename = import.meta.env.PROD ? '/CedarBayTrailCo2026' : '';
  
  return (
    <BrowserRouter basename={basename}>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
