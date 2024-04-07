import { z } from "zod";

export const articleAdmin = z.object({
  title: z.string().min(1, {
    message: "Please enter the article title",
  }),
  content: z.string().min(1, {
    message: "Please enter the article content",
  }),
  imageUrl: z.string().min(1, {
    message: "Please enter the article content",
  }),
});