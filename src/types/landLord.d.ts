export interface ILandLord {
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export interface ILandLordRegisterDTO extends ILandLord {
  password: string;
}