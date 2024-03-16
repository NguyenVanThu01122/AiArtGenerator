// Hàm điều hướng đến trang đăng ký/đăng nhập bằng Google
export const handleGoogleAuth = () =>
  (window.location.href = `${process.env.REACT_APP_BASE_URL}/google?redirect_url=${window.location.origin}`);

// Hàm điều hướng đến trang đăng ký/đăng nhập bằng Facebook
export const handleFacebookAuth = () =>
  (window.location.href = `${process.env.REACT_APP_BASE_URL}/facebook?redirect_url=${window.location.origin}`);
