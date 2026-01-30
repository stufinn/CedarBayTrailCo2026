import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  // Use basename only for GitHub Pages deployment
  const basename = import.meta.env.BASE_URL !== '/' ? import.meta.env.BASE_URL : undefined;
  
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
