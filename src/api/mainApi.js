import httpClient from './httpClient';

export const getMainBanner = () => {
  return httpClient.get('/main/banner');
};

export const getMainPopularParties = () => {
  return httpClient.get('/main/popular-parties');
};
