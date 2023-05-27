import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../css/Nav.css';

export default function Navigation() {
  return (
    <header>
      <nav>
        <div className="logo">
          <KeyboardArrowLeftIcon className="back-icon" />
          <h2>2023</h2>
        </div>
        <p>Texas Breweries</p>
        <div className="navIcons">
          <MicIcon className="icons" />
          <SettingsIcon className="icons" />
        </div>
      </nav>
    </header>
  );
}
