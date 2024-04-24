import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';

test('render Dialog component', () => {
    render(<Dialog isDialogOpen={true} closeDialog={() => {}} child="Hello world" />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
})
