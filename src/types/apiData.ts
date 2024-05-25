import { Article } from "./article";

export type ApiData = {
  status: string;
  message: string;
  totalResults: number;
  articles: Article[];
};
