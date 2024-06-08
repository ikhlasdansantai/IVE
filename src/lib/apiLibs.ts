export const getApiResponse = async (endpoint: string, query?: string) => {
  const response = await fetch(`${endpoint}?${query}`);
  const results = await response.json();
  return results;
};

export const getYoutubeApi = async (endpoint: string, query: string) => {
  const response = await fetch(`${endpoint}?${query}&key=${process.env.SECRET_KEY}`);
  const results = await response.json();
  return results;
};
