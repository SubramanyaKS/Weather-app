import './App.css';
import Header from './components/Header';
import Main from './pages/main';
import Footer from './components/Footer';
import { WeatherProvider } from './context/weatherDataContext';

function App() {
  return (
    <div className="App">
        <WeatherProvider>
        <Header/>
        <Main/>
        <Footer/>
        </WeatherProvider>
    </div>
  );
}

export default App;
