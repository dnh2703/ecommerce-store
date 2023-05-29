interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  verificationToken: string;
  isVerified: boolean;
  verified?: string;
}

interface IUserData {
  users: IUser[];
}

export type { IUser,IUserData };
