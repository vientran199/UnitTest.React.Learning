/* Function component method testing
- Discuss possible case for method testing
- Define the button, click event and method
- Test method with event
- Test method without event
*/

import { fireEvent, render, screen } from "@testing-library/react"
import FunctionMethodTesting from "../components/FunctionMethodTesting"
import { handleOtherMethod } from "../utils/helper"

test("Function component method testing", () => {
    render(<FunctionMethodTesting />)
    const btn = screen.getByTestId('btn1')

    fireEvent.click(btn)

    const h2 = screen.getByText('hello')
    expect(h2).toBeInTheDocument()
})

test("Other function", () => {
    expect(handleOtherMethod()).toMatch('hi')

})