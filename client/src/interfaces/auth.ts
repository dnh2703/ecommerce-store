interface ILoginForm {
  email: string;
  password: string;
}

interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

interface IVerifyEmail {
  verificationToken: string;
  email: string;
}

interface IForgotPassword {
  email: string;
}

interface IResetPassword {
  email: string;
  password: string;
  token: string;
}

export type {
  IForgotPassword,
  ILoginForm,
  IRegisterForm,
  IResetPassword,
  IVerifyEmail,
};
