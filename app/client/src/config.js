let base_url = "";

if (process.env.NODE_ENV === "development")
    base_url = 'http://localhost:3000';
else
    base_url = process.env.API;

export const API_BASE_URL = base_url;