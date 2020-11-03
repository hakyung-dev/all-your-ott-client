import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('renders NotFound text', () => {
    const { getByText } = render(<NotFound path="/notnotnot" />);
    const h1 = getByText('Page Not Found');
    const text = getByText(/페이지를/);
    expect(h1).toBeInTheDocument();
    expect(text).toHaveTextContent('해당 페이지를 찾을 수 없습니다.');
  });

  it('renders image', () => {
    const { getByAltText } = render(<NotFound path="/notnot" />);
    const image = getByAltText('not');
    expect(image).toHaveAttribute('src', 'index.png');
  });
});
