import apiClient from '../apiClient';


export const signUp = async (data: Partial<any>): Promise<any> => {
  try {
    const response = await apiClient.post('auth/signup', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
