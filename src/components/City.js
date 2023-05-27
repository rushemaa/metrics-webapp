import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import '../css/City.css';

export default function City({ city, breweries }) {
  return (
    <li className="city">
      <Link to="details" state={{ city, breweries }}>
        <div className="arrowRigght">
          <ArrowCircleRightOutlinedIcon />
        </div>
        <div>
          <h3>{city}</h3>
          <h5>{breweries}</h5>
        </div>
      </Link>
    </li>
  );
}

City.defaultProps = {
  city: '',
  breweries: 0,
};

City.propTypes = {
  city: PropTypes.string,
  breweries: PropTypes.number,
};
