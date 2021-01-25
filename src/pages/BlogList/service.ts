import axios from 'axios'
import { TableListParams } from './data.d';

const myPlatformService = axios.create({
  baseURL: "http://127.0.0.1:4000",
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
export async function getUsers() {
    return myPlatformService({
        method: 'get',
        url: '/users/get'
    })
}
// export default {
  
//   registerUsers(data) {
//     return myPlatformService({
//       method: 'post',
//       url: '/users/add',
//       data
//     })
//   },
//   getUsers() {
//     return myPlatformService({
//       method: 'get',
//       url: '/users/get'
//     })
//   },
//   getUsersById(apiUrl) {
//     return myPlatformService.get(
//       apiUrl
//     )
//   },
//   updateUserById(data) {
//     return myPlatformService({
//       method: 'post',
//       url: '/users/update',
//       data
//     })
//   },
//   deleteUsers(data) {
//     return myPlatformService({
//       method: 'post',
//       url: '/users/delete',
//       data
//     })
//   },
  
  

// }