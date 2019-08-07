interface LoginFormValues {
  email: string;
  password: string;
}

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface FormErrors {
  [fieldName: string]: string | undefined;
}

interface CreateTransactionFormValues {
  amount: number;
  category?: number;
  description: string;
  date: string;
  account?: number;
}
