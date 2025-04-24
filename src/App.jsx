import NavMenu from './components/NavMenu';
import { ThemeProvider} from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
        <div className="App">
          <div className="nav-container">
            <NavMenu />
        </div>
            <h1>Welcome to React</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
