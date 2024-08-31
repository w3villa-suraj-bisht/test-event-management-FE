import apiClient from '../apiClient';


export const signIn = async (data: Partial<any>): Promise<any> => {
  try {
    console.log(data)
    console.log("i have reached here")
    const response = await apiClient.post('http://4.186.57.96/auth/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
