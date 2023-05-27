import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchData } from '../redux/texas/texasSlice';
import texas from '../assets/texas.svg';
import '../css/Home.css';
import City from './City';
import Navigation from './Navigation';

export default function Home() {
  const { texasCites, loading } = useSelector((state) => state.texas);
  const dispatch = useDispatch();
  useEffect(() => {
    const perPage = 300;
    const link = `by_state=texas&per_page=${perPage}`;
    dispatch(fetchData(link));
  }, [dispatch]);

  const newBreweries = [];
  texasCites.forEach((brewery) => {
    const exist = newBreweries.filter(
      (element) => element.city === brewery.city,
    );
    if (exist.length === 0) {
      const appearance = texasCites.filter(
        (element) => element.city === brewery.city,
      );
      newBreweries.push({
        city: brewery.city,
        breweries: appearance.length,
      });
    }
  });

  const [searchCity, setSearchCity] = useState('');
  const searchInput = searchCity.toLowerCase();
  const citySearch = newBreweries.filter((el) => el.city.toLowerCase().includes(searchInput));

  return (
    <>
      <Navigation />
      <main>
        <div className="searchBox">
          <form>
            <h3>Search city</h3>
            <label className="searchLebal" htmlFor="serach">
              <input
                type="text"
                id="serach"
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Search city"
              />
            </label>
          </form>
        </div>
        <section className="main-header">
          <div className="tx-map">
            <img src={texas} className="tx-map-img" alt="Texas map" />
          </div>
          <div className="h-details">
            <div>
              <h2>Texas</h2>
              <p>
                {texasCites.length}
                {' '}
                Breweries
              </p>
            </div>
          </div>
        </section>
        <p className="h-status">STATUS BY CITY</p>
        {loading ? (
          <p>Loading</p>
        ) : (
          <ul className="cities">
            {citySearch.map((data) => (
              <City
                key={data.city}
                city={data.city}
                breweries={data.breweries}
                image={texas}
              />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
