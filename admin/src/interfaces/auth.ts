interface ILoginForm {
  email: string;
  password: string;
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
  IResetPassword,
};
