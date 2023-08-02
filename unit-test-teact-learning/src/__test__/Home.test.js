import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Home from '../components/home';
// import MockedHello from '../components/hello'

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

//mock component
// jest.mock("../components/hello", () => {
//     return function DummyHello(props) {
//         return (
//             <div></div>
//         )
//     }
// })
it("Advanced testing", () => {
    act(() => {
        render(<Home />, container);
    })

    expect(container.querySelector('h2').textContent).toBe('Hello, Vien!');
    expect(container.querySelector('h1').innerHTML).toBe('Home page')
})