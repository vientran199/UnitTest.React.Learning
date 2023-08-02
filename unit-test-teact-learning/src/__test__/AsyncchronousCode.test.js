import fetchData from '../components/AsynchronousCode'

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('data')
    })
})

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('data');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1); //Phải có lệnh này khi test promise fail
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('data');
});

test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});

test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});