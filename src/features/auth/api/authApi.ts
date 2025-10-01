// import { apiClient } from '@/api';
import { API_ENDPOINTS } from '@/config/api.config';
import type { AuthResponse, LoginRequest, PasswordResetConfirm, PasswordResetRequest, RegisterRequest, User } from '../types';
import { apiClient } from '@/api/client';
 

export const authApi = {
  // Authentication
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
  },

  register: async (userData: RegisterRequest): Promise<User> => {
    return apiClient.post<User>(API_ENDPOINTS.AUTH.REGISTER, userData);
  },

  logout: async (): Promise<void> => {
    return apiClient.post<void>(API_ENDPOINTS.AUTH.LOGOUT);
  },

  // User Profile
  getCurrentUser: async (): Promise<User> => {
    return apiClient.get<User>(API_ENDPOINTS.AUTH.PROFILE);
  },

  updateProfile: async (userData: Partial<User>): Promise<User> => {
    return apiClient.put<User>(API_ENDPOINTS.AUTH.PROFILE, userData);
  },

  // Password Reset
  requestPasswordReset: async (data: PasswordResetRequest): Promise<void> => {
    return apiClient.post<void>('/auth/password-reset', data);
  },

  confirmPasswordReset: async (data: PasswordResetConfirm): Promise<void> => {
    return apiClient.post<void>('/auth/password-reset/confirm', data);
  },

  // Token Management
  refreshToken: async (): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REFRESH);
  },
} as const;