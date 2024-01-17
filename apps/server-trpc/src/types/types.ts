import { UUID } from "crypto";

export interface EmployeeType {
    id:UUID
    first_name:string
    last_name: string
}

export interface UserType{
    id:UUID
    first_name:string
    last_name:string
    email: string
    password: string
}