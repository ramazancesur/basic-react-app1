import axios from 'axios';

let options = {  headers:{'Content-Type': 'application/json; charset=utf-8'} };

const instance = axios.create(options);

export function getAxios(endpoint, data = undefined, hostUrl) {

    const currentInstance = () => {
        return data === undefined ? instance.get(endpoint) : instance.get(endpoint, {
            params: JSON.stringify( data)
        });
    }
    return currentInstance()
        .then(response => {
            return response;
        })
        .catch((error) => {
            console.error("error message: ", error.message);
            throw new Error(error);
        });
}

export function deleteAxios(endpoint, data, hostUrl) {
    return instance.delete(endpoint)
        .then(response => {
            return response.data;
        })
        .catch((error) => {
            console.error("server error ", error.message);
            throw new Error(error);
        });
}

export function postAxios(endpoint, { data, errorMessage = 'Something bad happened', hostUrl }) {
    return instance.post(endpoint, data)
        .then(response => {
            return response;
        })
        .catch((error) => {
            console.error("server error ", error.message);
            throw new Error(error);
        });
}

export function putAxios(endpoint, { data, errorMessage = 'Something bad happened' }, hostUrl) {
      return instance.put(endpoint, data)
        .then(response => {
            return response;
        })
        .catch((error) => {
            console.error("server error ", error.message);
            throw new Error(error);
        });
}

export function callAxiosWithFullUrl({ url, errorMessage = 'Something bad happened' }) {
    if (url) {
        return instance.get(url)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log("server error ", error.message);
                throw new Error(error);
            });
    }
}

