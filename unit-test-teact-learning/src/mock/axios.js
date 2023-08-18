export default axios = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            if (true) {
                resolve({
                    data: []
                })
            } else {
                reject('error')
            }
        })
    }
}