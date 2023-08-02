export function forEachClone(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index], 'test');
    }
}