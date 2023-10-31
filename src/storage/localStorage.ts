const LOCAL_STORAGE_KEY = 'your_local_key';

export const setLocalStorage = (key: string, value: any): void => {
  const data = JSON.stringify(value);
  localStorage.setItem(`${LOCAL_STORAGE_KEY}_${key}`, data);
};

export const getLocalStorage = (key: string): any | null => {
  const data = localStorage.getItem(`${LOCAL_STORAGE_KEY}_${key}`);
  return data ? JSON.parse(data) : null;
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(`${LOCAL_STORAGE_KEY}_${key}`);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
