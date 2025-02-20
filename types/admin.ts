export type Admin = {
  _id?: string;
  name: string;
  email: string;
  photo: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date | '' | null;
}