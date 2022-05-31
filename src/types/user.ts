export enum UserRoles {
  Ecologist = "Ecologist",
  FacilityOne = "Facility worker 1",
  FacilityTwo = "Facility worker 2",
  FacilityThree = "Facility worker 3",
  Admin = "Admin"
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