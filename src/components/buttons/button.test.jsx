import { fireEvent, render, screen } from '@testing-library/react';
import Buttons from './button';



it.todo("should check the prop title")  // test 1
it.todo("should check the click functionality")  // test 2
const clickHandlerMethod = jest.fn();
describe("Buttons", () => {
    const renderButton = () =>
      render(
        <Buttons
        id="calc-1" 
        class="calc" 
        title="buttonTest" 
        clickHanlder={clickHandlerMethod}
        />
      )

      
// test 1 
it("should check the button title set through props",() => {
    renderButton();
    const btn = screen.getByRole("button")
    expect(btn.innerHTML).toBe("buttonTest")
}) 

// test 2
it("should check the click functionality",() => {
   renderButton();
   const btn = screen.getByRole("button")
   fireEvent.click(btn)
   expect(clickHandlerMethod).toHaveBeenCalled()
}) 

})