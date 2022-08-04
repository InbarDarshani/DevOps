let base_url = "";

if (process.env.NODE_ENV === "development")
    base_url = 'http://localhost:3000';
else
    base_url = process.env.REACT_APP_API;

export default API_BASE_URL = base_url;