import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

test('Previous button needs to be disabled intially', () => {
    render(<Pagination pages={["1","2","3","4","5"]} currentPage={1} handleClick={() => {}} />);
    expect(screen.getByText("Prev")).toBeDisabled();
})

test('Next button needs to be Enabled', () => {
    render(<Pagination pages={["1","2","3","4","5"]} currentPage={1} handleClick={() => {}} />);
    expect(screen.getByText("Next")).not.toBeDisabled();
})

test('Prev button needs to be Enabled when currentpage is not equal to 1', () => {
    render(<Pagination pages={["1","2","3","4","5"]} currentPage={2} handleClick={() => {}} />);
    expect(screen.getByText("Prev")).not.toBeDisabled();
})

test('Next button needs to be disabled', () => {
    render(<Pagination pages={["1","2","3","4","5"]} currentPage={5} handleClick={() => {}} />);
    expect(screen.getByText("Next")).toBeDisabled();
})

test('button needs to be disabled', () => {
    render(<Pagination pages={["1","2","3","4","5"]} currentPage={5} handleClick={() => {}} />);
    expect(screen.getByText("Next")).toBeDisabled();
})

test ("test Current page", () => {
    render(<Pagination pages={["1","2","3","4","5"]} currentPage={5} handleClick={() => {}} />);
    expect(screen.getByText("5")).toBeVisible();
})