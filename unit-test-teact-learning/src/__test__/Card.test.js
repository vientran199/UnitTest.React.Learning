import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Card from "../components/card";

let container = null;
beforeEach(() => {
    // cài đặt một DOM element như là target cho render
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers(); //Bat giả lập thời gian, giúp test mà không cần đợi time out.
});

afterEach(() => {
    // dọn dẹp lúc thoát
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.useRealTimers();
});

it("should select null after timing out", () => {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect={onSelect} />, container);
    })

    //chay den luc 100ms
    act(() => {
        jest.advanceTimersByTime(100);
    })
    expect(onSelect).not.toHaveBeenCalled();

    //va chay den luc 5s

    act(() => {
        jest.advanceTimersByTime(5000)
    })
    expect(onSelect).toHaveBeenCalledWith(null);
})

it("should cleanup on being removed", () => {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect={onSelect} />, container);
    })

    //chay den luc 100ms
    act(() => {
        jest.advanceTimersByTime(100);
    })
    expect(onSelect).not.toHaveBeenCalled();

    //unmount
    act(() => {
        render(null, container);
    })

    //chay den luc 5s
    act(() => {
        jest.advanceTimersByTime(5000);
    })
    expect(onSelect).not.toHaveBeenCalled();
})

it("should accept selections", () => {
    const onSelect = jest.fn();
    act(() => {
        render(<Card onSelect={onSelect} />, container);
    });

    act(() => {
        jest.advanceTimersByTime(2000);
    })
    expect(onSelect).not.toHaveBeenCalled();

    act(() => {
        container
            .querySelector("[data-testid='2']")
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onSelect).toHaveBeenCalledWith(2);

    act(() => {
        jest.advanceTimersByTime(5000);
    })
    expect(onSelect).toHaveBeenCalledWith(null);
    expect(onSelect).toHaveBeenCalledTimes(2);
});
