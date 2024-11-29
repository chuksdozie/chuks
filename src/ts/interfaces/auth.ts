export interface LoginData {
  email: string;
  user_password: string;
}
export interface GenerateTokenData {
  userId: string;
  organizationMemberId: string;
}
export interface ForgotPassData {
  email: string;
}
