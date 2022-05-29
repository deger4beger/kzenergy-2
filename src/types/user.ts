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