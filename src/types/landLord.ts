export interface ILandLord {
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createDate: Date;
}

export interface ILandLordRegisterDTO extends ILandLord {
  password: string;
}