import React from 'react';
import {render, fireEvent, act} from '@testing-library/react'
import Button from "./Button";

//regression
//disables atribute has effect on the button
// className has effect on the styling of the button
// type is assigned to the button
// id is assigned to this button
// The callback function is called when the button is clicked

//Arrange (klaarzetten data)
//Act (handelen functie aamroepem)
//Assert (beweringen/ verwachte uitkomst)


// Arrange
const buttonDefaultProps = {
    name:"",
    type:"button",
    id:"",
    click:() => {},
    value:"",
    disabled:false
}
// Button {...props} name=“something”
// Button {..props, name=“…”} name=“something”


test("button displays correct name", () =>{
    const testName = "My First Test :D"
    const {getByText} = render(<Button {...buttonDefaultProps} name={testName}/>)
    const button = getByText(testName)
    expect(button).not.toBeNull();
});

test("button displays correct type", () =>{
    const { container } = render(<Button {...buttonDefaultProps} type={buttonDefaultProps.type}/>);
    const button = container.querySelector('button');
    expect(button.type).toBe(buttonDefaultProps.type);
});

test("button click is working", () =>{
    const testCallback = jest.fn(() => {})
    const {container} = render(<Button {...buttonDefaultProps} click={testCallback}/>);
    const button = container.querySelector('button');
    act(() => {
        fireEvent.click(button);
    })
    expect(testCallback).toHaveBeenCalledTimes(1);
});


//test that shows that the buttom is disabled. is disabled is true
// test that there is a disabled on the button
// test that the button is not clickable, callback is zero
// id 




// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
// });

