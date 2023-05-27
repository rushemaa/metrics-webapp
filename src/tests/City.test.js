import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import City from '../components/City';

describe('Test for render city details', () => {
  it('snapshot for city details', () => {
    const mockProp = {
      city: 'Austin',
      breweries: 26,
    };
    const { asFragment } = render(
      <BrowserRouter>
        <City prop={mockProp} />
      </BrowserRouter>,
    );
    expect(asFragment(<City prop={mockProp} />)).toMatchSnapshot();
  });
});
