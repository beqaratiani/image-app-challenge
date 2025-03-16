import { AxiosError } from 'axios';
import { mockAxios } from './axios';

type LoginBody = {
  email: string;
  password: string;
};

type RegisterBody = {
  email: string;
  password: string;
  age: number;
};

export const handleLogin = async (body: LoginBody) => {
  try {
    const response = await mockAxios.post('/login', {
      email: body.email,
      password: body.password,
    });

    if (response.data.MockToken) {
      localStorage.setItem('MockToken', response.data.MockToken);
      return response.data;
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    throw new Error('An unexpected error occurred');
  }
};

export const handleRegister = async (body: RegisterBody) => {
  try {
    const response = await mockAxios.post('/register', {
      email: body.email,
      password: body.password,
      age: body.age,
    });

    console.log(response.data);

    if (response.data.MockToken) {
      localStorage.setItem('MockToken', response.data.MockToken);
      return response.data;
    } else {
      throw new Error('Registration failed: No token received');
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
    throw new Error('An unexpected error occurred');
  }
};

export const handleLogout = async () => {
  try {
    const response = await mockAxios.post('/logout');

    if (response.status === 200) {
      localStorage.removeItem('MockToken');
      console.log('Logged out successfully');
    } else {
      throw new Error('Logout failed: Unexpected response');
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred during logout');
  }
};
