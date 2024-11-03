import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import useFetchData from './hooks/useFetchData';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';
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

  if (loading) return <p className="text-center font-2xl text-slate-100 font-semibold">Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <Router>
      <div className="App">
        <Nav nav={data.nav} />
        <Header header={data.header} />
        <MainComponent data={data} />
        <Footer footer={data.footer} />
      </div>
    </Router>
  );
}

export default App;
