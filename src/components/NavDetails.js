import { Link } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../css/Nav.css';

export default function NavDetails() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <KeyboardArrowLeftIcon className="back-icon" />
          </Link>
        </div>
        <p>City Breweries</p>
        <div className="navIcons">
          <MicIcon className="icons" />
          <SettingsIcon className="icons" />
        </div>
      </nav>
    </header>
  );
}
