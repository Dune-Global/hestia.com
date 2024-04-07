import axios from 'axios';

export const getDashboardData = async () => {
  try {
    const response = await axios.get('/api/admin/dashboard');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};