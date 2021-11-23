import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList/ProductList1';

test('renders the ProductList', () => {
  const { getByText } = render(<ProductList />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
