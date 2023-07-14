import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Contact from '../components/contact';
import MockMap from '../components/map';


jest.mock("../components/map", () => {
    return function DummyMap(props) {
        return (
            <div data-testid='map'>
                {props.center.lat}:{props.center.long}
            </div>
        )
    }
})

let container = null;
beforeEach(() => {
    // cài đặt một DOM element như là target cho render
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // dọn dẹp lúc thoát
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render contact information", () => {
    const center = {
        lat: 0,
        long: 0
    }

    act(() => {
        render(
            <Contact
                name="Joni Baez"
                email="test@example.com"
                site="http://test.com"
                center={center}
            />,
            container
        )
    })
    expect(
        container.querySelector("[data-testid='email']").getAttribute('href')
    ).toEqual("mailto:test@example.com")

    expect(
        container.querySelector('[data-testid="site"]').getAttribute("href")
    ).toEqual("http://test.com");

    expect(container.querySelector('[data-testid="map"]').textContent).toEqual(
        "0:0"
    );
})