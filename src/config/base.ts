// type Env = {
//   VITE_API_BASE_URL?: string;
// };

// declare global {
//   interface Window {
//     env?: Env;
//   }
// }

// export const baseConfig = {
//   apiBaseUrl: window.env?.VITE_API_BASE_URL || import.meta.env.VITE_API_BASE_URL,
// };

export const baseConfig = {
  apiBaseUrl: 'https://test.tspb.su/test-task',
};
