export const APP_TITLE = "StuVibe";
export const DATABASE_PREFIX = "authdb_v3";
export const EMAIL_SENDER = '"StuVibe" <noreply@femprishtest.online>';

export const redirects = {
  toLogin: "/login",
  toSignup: "/signup",
  afterLogin: "/dashboard",
  afterLogout: "/",
  toVerify: "/verify-email",
  afterVerify: "/dashboard",
} as const;