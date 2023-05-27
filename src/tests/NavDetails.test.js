import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavDetails from '../components/NavDetails';

describe('Test for details Nav', () => {
  it('snapshot for details Nav', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavDetails />
      </BrowserRouter>,
    );
    expect(asFragment(<NavDetails />)).toMatchSnapshot();
  });
});
