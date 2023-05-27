import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { fetchData } from '../redux/texas/breweriesSlice';
import NavDetails from './NavDetails';
import '../css/Details.css';
import texas from '../assets/texas.svg';

export default function Details() {
  const { state } = useLocation();
  const { breweriesData, loading } = useSelector((bre) => bre.breweries);
  const dispatch = useDispatch();
  useEffect(() => {
    const perPage = state.breweries;
    const link = `by_city=${encodeURIComponent(
      state.city,
    )}&per_page=${perPage}`;
    dispatch(fetchData(link));
  }, [dispatch, state.city, state.breweries]);

  const newBreweries = [];
  breweriesData.forEach((brewery) => {
    const exist = newBreweries.filter(
      (element) => element.type === brewery.brewery_type,
    );
    if (exist.length === 0) {
      const appearance = breweriesData.filter(
        (element) => element.brewery_type === brewery.brewery_type,
      );
      newBreweries.push({
        type: brewery.brewery_type,
        breweries: appearance.length,
      });
    }
  });

  return (
    <>
      <NavDetails />
      <main style={{ backgroundColor: '#F558A1', height: '100vh' }}>
        <section className="main-header">
          <div className="tx-map">
            <img src={texas} className="tx-map-img" alt="Texas map" />
          </div>
          <div className="h-details">
            <div style={{ right: '20px' }}>
              <h2>{state.city}</h2>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <p>
                  {breweriesData.length}
                  {' '}
                  Breweries
                </p>
              )}
            </div>
          </div>
        </section>

        <h4 className="h-status">BREWERIES TYPES BREAKDOWN - 2023</h4>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="types">
            {newBreweries.map((element) => (
              <li className="type" key={element.type}>
                <p className="typeName">{element.type}</p>
                <div className="typeBre">
                  <p>
                    {element.breweries}
                    {' '}
                    Breweries
                  </p>
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
