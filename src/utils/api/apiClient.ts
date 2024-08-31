import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { store } from '@/redux/store';
import { setLoading, unsetLoading } from '@/redux/features/loaderSlice';

let apiClient: AxiosInstance;

const createApiClient = (baseURL: string, token?: string): AxiosInstance => {
  const client = axios.create({
    baseURL,
  });

  const startLoader = () => {
    store.dispatch(setLoading());
  };

  const stopLoader = () => {
    store.dispatch(unsetLoading());
  };

  // Request interceptor to start loader
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      startLoader();
      config.headers = config.headers || {};
      config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';
      if (localStorage.getItem('token')) {
        config.headers['token'] = localStorage.getItem('token') || '';
      }
      return config;
    },
    (error: AxiosError) => {
      stopLoader();
      return Promise.reject(error);
    }
  );

  // Response interceptor to stop loader
  client.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      stopLoader();
      return response;
    },
    (error: AxiosError) => {
      if(error.response?.status === 401){
        stopLoader();
        localStorage.clear();
        window.location.href = '/'
      }
      stopLoader();
      return Promise.reject(error);
    }
  );

  return client;
};

if (typeof window !== 'undefined') {
  const userToken = localStorage.getItem('token') || undefined;
  apiClient = createApiClient(process.env.NEXT_PUBLIC_API_URL || 'http://4.186.57.96/', userToken);
} else {
  apiClient = createApiClient(process.env.NEXT_PUBLIC_API_URL || 'http://4.186.57.96/');
}

export default apiClient;
