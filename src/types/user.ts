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

export interface SigninPayload {
  email: string
  password: string
}

export interface SignupPayload extends Omit<UserData, "id" | "token"> {
  password: string
}