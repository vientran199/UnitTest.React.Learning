import { render, screen } from "@testing-library/react";
import TestWithMockData from "../components/TestWithMockData";
import { mockData } from "../mocks";
import userEvent from "@testing-library/user-event";

// test('List renders successfully', () => {
//     render(<TestWithMockData data={mockData} />)

//     const element = screen.getByText(/fletcher/i)

//     expect(element).toBeInTheDocument() // => return false test case
// })

test("Ordered list renders", () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={false} />)

    expect(screen.getByText(/McVanamy/i)).toBeInTheDocument()
})

test("Unordered list renders", () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={true} />)

    expect(screen.getByText(/McVanamy/)).toBeInTheDocument()
})

test("Email link click handler called", async () => {
    const mockHandleClick = jest.fn();
    render(<TestWithMockData data={mockData} displayUnorderedList={true} handleClick={mockHandleClick} />)

    await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i))

    expect(mockHandleClick).toHaveBeenCalled()
})