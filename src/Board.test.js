import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('The Board should get re-rendered on each click, with Xs and Os appearing on alternating clicks.', () => {
    const board = render(<Board/>);
    const boardRender = Board.render;
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
