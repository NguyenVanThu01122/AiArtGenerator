// lưu token
export const saveTokenLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

//lưu refresh token
export const saveRefreshTokenLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

// Lấy token từ localStorage
export const getTokenLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};

// Kiểm tra người dùng đã đăng nhập chưa
export const isAuthenticated = (): boolean => {
  const token = getTokenLocalStorage();
  return !!token;
};

// xóa RefreshToken localStorage
export const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

// Xóa token từ localStorage
export const removeToken = () => {
  localStorage.removeItem("token");
};
