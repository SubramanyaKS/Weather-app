import './App.css';
import Header from './components/Header';
import Main from './components/main';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
        <Main/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
