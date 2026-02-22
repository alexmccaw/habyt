import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to get data from an endpoint
export const fetchData = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(`API call failed: ${error}`);
  }
};

// Example function to post data to an endpoint
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(`API call failed: ${error}`);
  }
};