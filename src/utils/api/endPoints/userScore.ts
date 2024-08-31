import apiClient from '../apiClient';

export const score = async (data: Partial<any>): Promise<any> => {
    try {
      const response = await apiClient.post('users/score', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

  export const userQuestion = async (questionPaperId: Partial<any>): Promise<any> => {
    try {
      const response = await apiClient.get(`users/userQuestions?questionPaperId=${questionPaperId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getUserDetails = async (questionPaperId: Partial<any>): Promise<any> => {
    try {
      const response = await apiClient.get(`users/attemptedPapers`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  