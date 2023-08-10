import { render, screen } from '@testing-library/react';
import Display from './display';
import userEvent from '@testing-library/user-event';

test.todo('tests the initial display value')
test.todo('tests the display value')


//test 1 
test('tests the initial display value', () => {
    render(<Display/>);
    const display = screen.getByRole("display")
     
     expect(display).toHaveValue("")
  });
  


//test 2
test('tests the display value', () => {
    render(<Display/>);
    const display = screen.getByRole("display")
     userEvent.type(display,"14+5")
     expect(display).toHaveValue("14+5")
  });
  