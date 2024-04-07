import mongoose, { Schema } from "mongoose";
import { IArticle } from "@/types/article";

const ArticleSchema: Schema = new Schema(
  {
    coverImgUrl: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'admin', required: true },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model<IArticle>("Article", ArticleSchema);

export default Article;