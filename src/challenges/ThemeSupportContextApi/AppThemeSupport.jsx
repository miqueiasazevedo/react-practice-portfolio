import NavMenu from '../../components/NavMenu';
import { ThemeProvider} from './ThemeContext';

function AppThemeSupport() {
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

export default AppThemeSupport;
