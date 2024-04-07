import mongoose from 'mongoose';

export interface IArticle {
  _id?: mongoose.Types.ObjectId;
  coverImgUrl?: string;
  title: string;
  content: string;
  adminId: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}