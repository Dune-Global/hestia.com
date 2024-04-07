import axios from 'axios';

export const addArticle = async (articleData: any) => {
  try {
    const response = await axios.post('/api/articles', articleData);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updateArticle = async (articleId: string, updatedData: any) => {
  try {
    const response = await axios.put(`/api/articles/${articleId}`, updatedData);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteArticle = async (articleId: string) => {
  try {
    const response = await axios.delete(`/api/articles/${articleId}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getArticle = async (articleId: string) => {
  try {
    const response = await axios.get(`/api/articles/${articleId}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getAllArticles = async () => {
  try {
    const response = await axios.get('/api/articles');
    return response;
  } catch (error: any) {
    return error.response;
  }
};