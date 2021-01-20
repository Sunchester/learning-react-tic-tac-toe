import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('The Board should get re-rendered on each click, with Xs and Os appearing on alternating clicks.', () => {
    const board = render(<Board/>);
    const buttons = board.queryAllByRole('button');
    const button = buttons[0];
    const button2 = buttons[1];
    const button3 = buttons[2];
    const button4 = buttons[3];
    
    fireEvent.click(button);
    expect(button.innerHTML).toBe('X');

    fireEvent.click(button2);
    expect(button2.innerHTML).toBe('O');

    fireEvent.click(button3);
    expect(button3.innerHTML).toBe('X');

    fireEvent.click(button4);
    expect(button4.innerHTML).toBe('O');

});
test("The status message that says Next player: __ should alternate between saying Next player: X and Next player: O, depending on whose turn it is. Implement and test this behaviour.", () => {
    const board = render(<Board/>);
    const buttons = board.queryAllByRole('button');
    const text = board.getByTestId('status');
    const button = buttons[0];
    const button2 = buttons[1];
    const button3 = buttons[2]
    const button4 = buttons[3]

    // Initial Status
    expect(text.innerHTML).toBe('Next player: X')

    // X is marked
    fireEvent.click(button);
    expect(text.innerHTML).toBe('Next player: O')

    // O is marked
    fireEvent.click(button2);
    expect(text.innerHTML).toBe('Next player: X')

    // X is marked again
    fireEvent.click(button4);
    expect(text.innerHTML).toBe('Next player: O')

});

