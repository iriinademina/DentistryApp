export interface AuthData {
  userName: string;
  email: string;
  password?: string;
} 

export interface User {
    userName: string;
    id: string;
    firstName?: string;
    lastName?: string;
    avatarPath?: string;
    speciality?: string
  }
  
