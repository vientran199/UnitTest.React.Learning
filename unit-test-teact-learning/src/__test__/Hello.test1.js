import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty'

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
    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); //... được tự dộng điền bỏi jest... 

    act(() => {
        render(<Hello name="Jenny" />, container);
    });
    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); //... được tự dộng điền bỏi jest... 

    act(() => {
        render(<Hello name="Margaret" />, container);
    });
    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); //... được tự dộng điền bỏi jest... 
});

//Snapshot Test
//Framework như Jest cho chúng ta lưu “ảnh” với toMatchSnapshot / toMatchInlineSnapshot. Với chúng, bạn có thể “lưu” một kết quả render và đảm bảo một thay đổi có thể làm thay đổi của kết quả snapshot.
//Thường sẽ tốt hơn nếu chỉ rõ kết quả muốn nhận được thay vì snapshot. Những kiểu test này bao gồm phần hiện thực chi tiết để chúng dễ dàng bị fail