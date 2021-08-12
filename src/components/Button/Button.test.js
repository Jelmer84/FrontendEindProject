import React from "react";
import {render, fireEvent, act} from "@testing-library/react"
import Button from "./Button";

const buttonDefaultProps = {
    name: "",
    type: "button",
    id: "",
    click: () => {
    },
    value: "",
    disabled: false
}

test("button displays correct name", () => {
        const testName = "My First Test :D"
        const {getByText} = render(<Button {...buttonDefaultProps} name={testName}/>)
        const button = getByText(testName)
        expect(button).not.toBeNull();
    }
);

test("button displays correct type", () => {
        const {container} = render(<Button {...buttonDefaultProps} type={buttonDefaultProps.type}/>);
        const button = container.querySelector('button');
        expect(button.type).toBe(buttonDefaultProps.type);
    }
);

test("button click is working", () => {
        const testCallback = jest.fn(() => {
        })
        const {container} = render(<Button {...buttonDefaultProps} click={testCallback}/>);
        const button = container.querySelector('button');
        act(() => {
            fireEvent.click(button);
        })
        expect(testCallback).toHaveBeenCalledTimes(1);
    }
);
