const API_URL = "https://635ad7456f97ae73a637df53.mockapi.io/";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const request = async (endpoint: string, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, options);
  return checkResponse(res);
};
