import { render } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe('Test for Home Nav', () => {
  it('snapshot for Home Nav', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment(<Navigation />)).toMatchSnapshot();
  });
});
