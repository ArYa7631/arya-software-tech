const SESSION_STORAGE_KEY = 'your_session_key';

export const setSessionStorage = (key: string, value: any): void => {
  const data = JSON.stringify(value);
  sessionStorage.setItem(`${SESSION_STORAGE_KEY}_${key}`, data);
};

export const getSessionStorage = (key: string): any | null => {
  const data = sessionStorage.getItem(`${SESSION_STORAGE_KEY}_${key}`);
  return data ? JSON.parse(data) : null;
};

export const removeSessionStorage = (key: string): void => {
  sessionStorage.removeItem(`${SESSION_STORAGE_KEY}_${key}`);
};

export const clearSessionStorage = (): void => {
  sessionStorage.clear();
};
