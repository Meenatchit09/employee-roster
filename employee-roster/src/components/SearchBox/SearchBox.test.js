import { render, screen } from '@testing-library/react';
import { SearchBox } from './SearchBox'

test('render search component', () => {
    render(<SearchBox handleSearch={() => {}} />);
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getBy("Search")).toBeInTheDocument();
})
