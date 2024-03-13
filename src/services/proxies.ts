import axios from 'axios';

/**
 * Use this on calls that require auth. Add the ENV var VITE_SITE_ENV to you local env file.
 * @param token
 */
export const getHeaders = (token: string) => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

export const portfolioProxy = axios.create({
  baseURL: import.meta.env.HUBBLE_API_URL || '/hubbleapi',
  timeout: parseInt(import.meta.env.REQUEST_TIMEOUT || '0', 10),
  headers: { 'Content-Type': 'application/json' },
});
