import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "../components/user";

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

it("renders user data", async () => {
    const fakeUser = {
        name: "Joni Baez",
        age: "32",
        address: "123, Charming Avenue"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    // sử dụng một phiên bản async để áp dụng resolved promise
    await act(async () => {
        render(<User id="123" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakeUser.address);

    // xóa giả lập để đảm bảo test chạy tách biệt
    global.fetch.mockRestore();
});