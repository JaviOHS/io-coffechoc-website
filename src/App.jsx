import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import useFetchData from './hooks/useFetchData';
import Header from './pages/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const { data, loading, error } = useFetchData('/data.json');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center gap-4 my-12">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
      </div>
      <div className="text-slate-100 font-semibold text-xl">
        Preparando tu experiencia Coffechoc...
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] p-4">
      <div className="bg-[#2C1810] backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Oops! Algo salió mal
            </h3>
            <p className="text-slate-400 mb-6">
              {error.message}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#D9C56E] text-[#2C1810] px-6 py-2 rounded-lg font-semibold hover:bg-[#e6d178] transition-colors duration-300">
              Intentar nuevamente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <Router>
      <div className="App">
        <Nav nav={data.nav} />
        <Header header={data.header} />
        <MainComponent data={data} />
        <Footer footer={data.footer} />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
