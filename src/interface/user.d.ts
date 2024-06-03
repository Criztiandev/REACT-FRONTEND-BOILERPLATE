export interface User {
  id: number;
  isAuthenticated?: boolean;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  gender: string;
}
