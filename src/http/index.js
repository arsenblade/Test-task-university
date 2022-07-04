import axios from "axios"

export const $axiosAuth = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Token a6f11697ee5335cb24fa2054b3e850b6c3882d30"
  },
})
