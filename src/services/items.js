import axios from 'axios';


const API = 'https://66d4964d5b34bcb9ab3efe4c.mockapi.io/dev/books';

const service = {
    get: (id) => 
        axios(id ? API + `/${id}` : API)
            .then(({data}) => data)
            .catch((err) => console.log(err))
}


export default service;