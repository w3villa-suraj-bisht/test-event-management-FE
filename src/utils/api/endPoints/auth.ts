import apiClient from '../apiClient';


export const signIn = async (data: Partial<any>): Promise<any> => {
  try {
    const response = await apiClient.post('auth/signin', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
