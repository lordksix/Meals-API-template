const createApiMealURL = (baseurl, queryKey, queryValue) => {
  const url = `${baseurl}${queryKey}=${queryValue}`;
  return url;
};

const createApiInvURL = (baseurl, id, endpoint) => {
  const url = `${baseurl}${id}${endpoint}`;
  return url;
};

const createApiInvQueryURL = (baseurl, id, endpoint, query) => {
  const url = `${baseurl}${id}${endpoint}?item_id=${query}`;
  return url;
};

export {
  createApiMealURL, createApiInvURL, createApiInvQueryURL,
};