import { fireEvent, render, screen } from "@testing-library/react";
import TestingInputBox from "../components/TestingInputBox";

test('Test input box 1', () => {
    render(<TestingInputBox />)

    const element = screen.getByRole('textbox')
    const textBoxPlaceholder = screen.getByPlaceholderText(/Enter User Name/)

    expect(element).toBeInTheDocument()
    expect(textBoxPlaceholder).toBeInTheDocument()
    expect(element).toHaveAttribute('name', 'userName')
})

test("On change event testing", () => {
    render(<TestingInputBox />)

    const element = screen.getByRole('textbox')

    fireEvent.change(element, { target: { value: '123' } })

    expect(element.value).toBe('123')
})