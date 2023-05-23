const createApiMealURL = (baseurl, queryKey, queryValue) => {
  const url = `${baseurl}${queryKey}=${queryValue}`;
  return url;
};

const createApiInvURL = (baseurl, id = false, endpoint = false) => {
  const url = `${baseurl}${id || false}${endpoint || false}`;
  return url;
};

export {
  createApiMealURL, createApiInvURL,
};