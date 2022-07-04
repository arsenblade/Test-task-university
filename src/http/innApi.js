import { $axiosAuth } from "."

export const innPost = async (inn) => {
  const {data} = await $axiosAuth.post('/', {query: inn})
  return data
}