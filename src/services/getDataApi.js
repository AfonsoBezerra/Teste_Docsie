import axios from "axios";

export async function getDataApi(url) {
  const data = await axios.get(url);
  return data;
}
