import defaultExport, { bar, foo } from '../modules/foo-bar-baz';

jest.mock('../modules/foo-bar-baz', () => {
    const originalModule = jest.requireActual('../modules/foo-bar-baz');

    console.log(originalModule)
    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo',
    };
});

test('should do a partial mock', () => {
    const defaultExportResult = defaultExport();

    console.log(defaultExportResult)

    expect(defaultExportResult).toBe('mocked baz');
    expect(defaultExport).toHaveBeenCalled();

    expect(foo).toBe('mocked foo');
    expect(bar()).toBe('bar');
});