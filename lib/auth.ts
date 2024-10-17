export const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('isAuthenticated', 'false');
  }
  window.location.reload()
};

export const login = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('isAuthenticated', 'true');
  }
  window.location.reload()
};

