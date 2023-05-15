import { call, SagaReturnType } from 'redux-saga/effects';
import { axiosInstance, RawAxiosRequestConfig } from '@utils/axios';

function* prepareConfig() {
  const accessToken: SagaReturnType<typeof processAccessToken> = yield call(processAccessToken);

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  } as RawAxiosRequestConfig;
}

export function* getRequest(url: string, params?: any) {
  const config: SagaReturnType<typeof prepareConfig> = yield call(prepareConfig);
  const { data, status } = yield axiosInstance.get(url, config);

  return { data, status };
}
