import axios from "axios";

const API_URL = "https://backendchatbot.worke.io/api/v1/";

const baseApi = axios.create({
  baseURL: API_URL,
});


function tokenSetter() {
  let jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0Njg3Mzk1LCJqdGkiOiI3YmE2ZDUxZjZkZGU0ZjU4OGVlODBhYmIzZDJkNTEyZiIsImlkIjoiZDhmZDYyNTEtOTIwNC00ODljLWIwMDctNWY3N2E2MGYxYjlhIn0.xjRJ7--IVfTcag2An0FvZR7fLucfJWVrzaifNJUrwRM'
  return jwtToken;
}

export default async function callApi(
  url,
  data = {},
  method = "GET",
) {
  let myUrl = url;

  return await baseApi({
    method: method,
    url: myUrl,
    data,
    headers: {
      Authorization: "Bearer " + tokenSetter(),
    },
  })
    .then(res => {
      // if (res.status === 200) {
      // }
      return { data: res.data, status: res.status };
    })

}
