const useSessionStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  const getItem = () => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const removeItem = () => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useSessionStorage;
