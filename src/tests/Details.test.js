import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      city: 'Austin',
      breweries: '26',
    },
  }),
}));

test('Check if details page renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
