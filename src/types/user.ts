export enum UserRoles {
  Ecologist = "Эколог",
  FacilityWorker = "Работник объекта",
  Admin = "Админ"
}

export interface UserData {
  id: string
  fullname: string
  email: string
  phone: string
  token: string
  role: UserRoles
}

export interface UserPermission {
  write: boolean
  read: boolean
  temporary: boolean
}

export interface SigninPayload {
  email: string
  password: string
}

export interface SignupPayload extends Omit<UserData, "id" | "token"> {
  password: string
}

export interface TemporaryUserPayload extends
  Pick<UserPermission, "write">,
  Pick<UserData, "email"> {
    role: UserRoles,
}

export interface PermissionPayload extends Pick<UserPermission, "write" | "read"> {}

export interface UserWithPermission extends Pick<UserData, "id" | "email" | "role"> {
  permission: UserPermission
}