import { render } from "@testing-library/react"
import App from "../App"

test("Snapshot testing 1", () => {
    const container = render(<App />)

    expect(container).toMatchSnapshot()
})