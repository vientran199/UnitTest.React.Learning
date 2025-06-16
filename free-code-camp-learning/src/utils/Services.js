export const fetchData = () => {
    return fetch("http://localhost:3000/data.json")
        .then(res => {
            return res.json();
        })
}