import { POST, PUT, DELETE, GET } from "./methods";
import callApi from "./apiCalls";

function tokenGetter() {
  let jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0Njg3Mzk1LCJqdGkiOiI3YmE2ZDUxZjZkZGU0ZjU4OGVlODBhYmIzZDJkNTEyZiIsImlkIjoiZDhmZDYyNTEtOTIwNC00ODljLWIwMDctNWY3N2E2MGYxYjlhIn0.xjRJ7--IVfTcag2An0FvZR7fLucfJWVrzaifNJUrwRM'
  return jwtToken;
}

export const getCardData = async () => {
  return await callApi(`/bot?token=${tokenGetter()}&type=local`,{}, GET);
};
export const postBotData = async (data) => {
  return await callApi(`/bot?token=${tokenGetter()}&type=local`, data, POST);
};
export const updateBotData = async (id, data) => {
  return await callApi(`/bot/${id}?token=${tokenGetter()}&type=local`, data, PUT);
};
export const deleteBotData = async (id) => {
  return await callApi(`/bot/${id}?token=${tokenGetter()}&type=local`, {}, DELETE);
};


// flow calls
export const getFlowData = async (id) => {
  return await callApi(`/flow?token=${tokenGetter()}&type=local&bot=${id}`,{}, GET);
};

export const postFlowData = async (id,data) => {
  return await callApi(`/flow?token=${tokenGetter()}&type=local&bot=${id}`,data, POST);
};

export const updateFlowData = async (bot_id, data) => {
  return await callApi(`/flow/${bot_id}?token=${tokenGetter()}&type=local`,data, PUT);
};


export const getFlowById = async (id) => {
  return await callApi(`/flow/${id}?token=${tokenGetter()}&type=local`, GET);
};



export const deleteFlowData = async (bot_id) => {
  return await callApi(`/flow/${bot_id}?token=${tokenGetter()}&type=local`,{}, DELETE);
};


// {{baseUrl}}/api/v1/flow/6412f0242f2b342206f0b89a?token={{hostToken}}&type=local
// {{baseUrl}}/flow/${id}?token=${tokenGetter()}&type=local