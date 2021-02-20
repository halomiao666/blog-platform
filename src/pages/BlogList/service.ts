import myPlatformService from '../../../config/service';

export async function getblogs(block: String) {
    return myPlatformService({
        method: 'get',
        url: '/blogs/getByBlock/'+ block
    })
}
export async function deleteblogs(data:any) {
  return myPlatformService({
      method: 'post',
      url: '/blogs/delete',
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