import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from '../components/hello';

//Khi kết thúc một test, chúng ta muốn “dọn dẹp” và gỡ bỏ cây này khỏi DOM.
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

it("renders with or without a name", () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
        render(<Hello name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
});