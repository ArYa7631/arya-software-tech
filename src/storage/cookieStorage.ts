const COOKIE_EXPIRATION_DAYS = 7;

export const setCookie = (key: string, value: any): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + COOKIE_EXPIRATION_DAYS);

  document.cookie = `${key}=${JSON.stringify(value)}; expires=${expirationDate.toUTCString()}; path=/`;
};

export const getCookie = (key: string): any | null => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.trim().split('=');
    if (cookieKey === key) {
      return JSON.parse(cookieValue);
    }
  }
  return null;
};

export const removeCookie = (key: string): void => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
