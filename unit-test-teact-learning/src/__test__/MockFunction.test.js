import { forEachClone } from "../components/MockFunction";
import axios from "../mock/axios";

const mockCallback = jest.fn((x, b) => x + 42);

test('forEach mock function', () => {
    forEachClone([0, 2], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(2);

    // The second arg of the first call to the function was 'second arg
    expect(mockCallback.mock.calls[1][1]).toBe('test');

    // The return value of the first call to the function was 42
    console.log(mockCallback.mock.results)
    expect(mockCallback.mock.results[0].value).toBe(42);

    // The function was called with a certain `this` context: the `element` object.
    //expect(someMockFunction.mock.contexts[0]).toBe(element);

    // This function was instantiated exactly twice
    //expect(someMockFunction.mock.instances.length).toBe(2);

    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    //expect(someMockFunction.mock.instances[0].name).toBe('test');

    // The first argument of the last call to the function was 'test'
    //expect(someMockFunction.mock.lastCall[0]).toBe('test');
})

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]


//Mock return values

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[1][0]); // 12

jest.mock('axios');

test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users));
});