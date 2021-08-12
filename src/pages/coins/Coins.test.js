import {render, fireEvent, act} from '@testing-library/react'
import selectEvent from 'react-select-event';
import Coins from "./Coins";

describe('Before Count', () => {
    test('by default, the submit button is disabled', () => {
        const {container} = render(<Coins />)
        const button = container.querySelector('#buttonSubmit')
        expect(button.disabled).toBe(true)
    })

    test("button is enabled when the 3 variables are selected", async() =>{
        const {container, getByLabelText} = render(<Coins />)
        const weekdaySelect = getByLabelText('Selecteer datum')
        const inkomEventSelect = getByLabelText('Selecteer evenement')
        const studentPartySelect = getByLabelText('Selecteer studentenpartij')

        await selectEvent.select(weekdaySelect, '13-08-2021')
        await selectEvent.select(inkomEventSelect, 'Pre-INKOM-Party')
        await selectEvent.select(studentPartySelect, 'S.V. Koko')

        const button = container.querySelector('#buttonSubmit')
        expect(button.disabled).toBe(false)
    })
})

