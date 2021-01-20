import {calculateWinner} from './helpers';
test('should return X as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('X');
  });

test('should return O as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['O', 'O', 'O', 'X', null, 'X', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('O');
  });

  test('should return null since there is no winner yet', () => {
    // Arrange the test
    const squares = ['X', 'O', 'X', 'O', null, 'X', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe(null);
  });