// Các Trường Hợp Kiểm Thử Cơ Bản
// Kiểm Thử Render:

// Kiểm tra xem component có render mà không gặp lỗi không.
// Kiểm tra các thành phần chính như form đăng nhập, các nút, và liên kết có được hiển thị đúng không.
// Kiểm Thử Form Đăng Nhập:

// Kiểm tra việc nhập vào các trường email và password.
// Kiểm tra tính hợp lệ của dữ liệu nhập vào.
// Kiểm tra hành động khi bấm nút "Sign in" với dữ liệu hợp lệ và không hợp lệ.
// Kiểm Thử Chức Năng:

// Kiểm tra việc gọi API khi dữ liệu form hợp lệ.
// Kiểm tra xử lý khi có lỗi từ API (hiển thị thông báo lỗi).
// Kiểm tra chuyển hướng người dùng khi đăng nhập thành công.
// Kiểm Thử Modal Quên Mật Khẩu:

// Kiểm tra hành động hiển thị modal khi nhấn vào liên kết "Forgot Password?".
// Kiểm tra chức năng của modal quên mật khẩu.
// Kiểm Thử Chức Năng Đăng Ký:

// Kiểm tra chuyển hướng người dùng khi nhấn vào liên kết "Register".

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { SignIn } from '..'
import store from '../../../redux/Store'

describe('SignIn Component', () => {
  it('handles successful login', async () => {
    // Giả lập hàm login trả về promise thành công
    const login = jest.fn()
    login.mockResolvedValue(
      Promise.resolve({
        data: { token: '123', refreshToken: '456' }
      })
    )
    // Render component trong môi trường Provider và BrowserRouter
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    )

    // Nhập liệu vào các trường form
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'user@example.com' } })
    fireEvent.change(screen.getByLabelText('password'), { target: { value: 'password123' } })

    // Nhấn nút "Sign in"
    fireEvent.click(screen.getByText('Sign in'))

    // Đợi và kiểm tra xem đã chuyển hướng sau khi đăng nhập thành công
    await waitFor(() => {
      expect(screen.getByText('You are logged in!')).toBeInTheDocument()
    })
  })
})
