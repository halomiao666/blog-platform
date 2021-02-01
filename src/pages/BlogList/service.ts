import myPlatformService from '../../../config/service';

export async function getblogs() {
    return myPlatformService({
        method: 'get',
        url: '/users/get'
    })
}
export async function deleteblogs(data:any) {
  return myPlatformService({
      method: 'post',
      url: '/users/delete',
      data
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