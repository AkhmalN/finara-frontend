const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const FINARA_API = {
  login: `${BASE_URL}/auth/login`,
  register: `${BASE_URL}/auth/register`,
};

export default FINARA_API;
