import './App.css';
import Header from './components/Header';
import Main from './pages/main';
import { ThemeProvider } from './context/ThemeContext';
import WeatherContext from './context/weatherContext';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <WeatherContext>
        <Header/>
        <Main/>
        <Footer/>
        </WeatherContext>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
