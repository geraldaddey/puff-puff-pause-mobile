import axios from 'axios';
import Config from 'react-native-config';

import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from '../../context/apiClient/apiClientContextController/interceptors/responseInterceptors';

export const BASE_URL = Config.BASE_API_URL;

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: BASE_URL,
});

axiosClient.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

export default axiosClient;
