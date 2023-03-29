import './App.css';
import Header from './components/Header';
import Main from './pages/main';
import { ThemeProvider } from './context/ThemeContext';
import WeatherContext from './context/weatherContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <WeatherContext>
        <Header/>
        <Main/>
        </WeatherContext>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
