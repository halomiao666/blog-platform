import axios from 'axios'

const myPlatformService = axios.create({
    // baseURL: "http://127.0.0.1:4000",
    baseURL: "http://www.meibugs.com:4000",
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})
export default myPlatformService;