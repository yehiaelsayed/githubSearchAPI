import axios from 'axios'

export async function httpGet(url: string) {
  const result = await axios.get(url);
  return result.data;
}

export async function httpPost(url: string, data: any) {
  const result = await axios.post(url, data);
  return result.data;
}