import axios from "axios";

const api = axios.create({

    baseURL: "https://randomuser.me/api/",
    timeout: 10000

});

api.interceptors.request.use((config) => {

    config.params['key'] = 'N2WC-19M9-L6HU-6CB2';

    return config

})

export default api;