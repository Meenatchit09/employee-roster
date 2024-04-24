import { render, screen } from '@testing-library/react';
import SummaryView from './SummaryView';

test('renders company details correctly', () => {
  render(<SummaryView />);
  const companyName = screen.getByText("Greenfelder Brothers");
  const companyEst = screen.getByText("Since 02-06-2017");
  const companyMotto = screen.getByText("one-to-one deliver niches");
  expect(companyName).toBeInTheDocument();
  expect(companyEst).toBeInTheDocument();
  expect(companyMotto).toBeInTheDocument();
});



