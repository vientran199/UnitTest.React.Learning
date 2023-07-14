import React from "react";
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils";

import Toggle from "../components/toggle";

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

it("Changes value when clicked", () => {
    const onChange = jest.fn(); //tạo ra event onChange

    act(() => {
        render(<Toggle onChange={onChange} />, container);
    })

    // lấy toàn bộ các element, và trigger một vài sự kiện click
    const button = container.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe('Turn on')

    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe('Turn off');

    act(() => {
        for (let i = 0; i < 5; i++) {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(button.innerHTML).toBe("Turn on");
})