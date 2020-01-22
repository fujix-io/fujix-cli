const validateUrl = (url: string): boolean => {
  const validationRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

  return validationRegex.test(url);
};

export default validateUrl;
