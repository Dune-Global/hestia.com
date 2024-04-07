import axios from 'axios';

export const uploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('https://greensupermarket-backend.azurewebsites.net/api/v1', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response;
  } catch (error: any) {
    return error.response;
  }
};