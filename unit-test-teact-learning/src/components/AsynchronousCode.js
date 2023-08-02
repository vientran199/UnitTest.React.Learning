const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data')
        }, 2000)
    })
}