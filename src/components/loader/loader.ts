export default class Loader {
    private static errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    public load() {
        return fetch('https://dummyjson.com/products?limit=100')
            .then(Loader.errorHandler)
            .then((res) => res.json())
            .catch((err) => console.error(err));
    }
}
