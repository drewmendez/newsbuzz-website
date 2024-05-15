import { ApiData } from "@/types/apiData";

// return the index of article with image available
export const getIndexWithValue = (data: ApiData, index: number) => {
  let dataIndex = index;
  while (data.articles[dataIndex].urlToImage === null) {
    dataIndex++;
  }
  return dataIndex;
};
