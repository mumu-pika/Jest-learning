// src/apis/user.ts
import axios from 'axios'

// 用户角色身份
export type UserRoleType = 'user' | 'admin'

export interface GetUserRoleRes {
  userType: UserRoleType
}

// 获取用户角色身份
export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>('https://mysite.com/api/role')
}
