import { baseConfig } from '@config/base';

const apiUrl = baseConfig.apiBaseUrl;

export const ENDPOINTS = {
  VEHICLES: {
    GET: '/vehicles',
  },
};

type Endpoints = { [key: string]: Endpoints | string };

const addApiBaseUrl = (item: Endpoints) => {
  Object.keys(item).map((key): null => {
    if (typeof item[key] !== 'string') {
      addApiBaseUrl(item[key] as Endpoints);
    } else {
      item[key] = apiUrl + item[key];
    }

    return null;
  });
};

addApiBaseUrl(ENDPOINTS);
