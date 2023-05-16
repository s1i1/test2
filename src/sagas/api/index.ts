import { axiosInstance } from '@utils/axios';

export function* getRequest(url: string, params?: any) {
  const { data, status } = yield axiosInstance.get(url);

  return { data, status };
}
