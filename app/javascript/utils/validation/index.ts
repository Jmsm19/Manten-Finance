import { format as formatDate } from 'date-fns';

const isEmail = (string: string) =>
  RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ).test(string);

const FIELD_REQUIRED = 'This field is required';
const PASSWORD_NOT_MATCH = "Password doesn't match";
const PASSWORD_MIN_LENGTH = 6;

export const LoginFormSetup = {
  initialValues: {
    email: '',
    password: '',
  },
  validate: (values: LoginFormValues) => {
    const errors: FormErrors = {};

    if (!values.email) {
      errors.email = FIELD_REQUIRED;
    } else if (!isEmail(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.password) {
      errors.password = FIELD_REQUIRED;
    }

    return errors;
  },
};

export const RegisterFormSetup = {
  initialValues: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  validate: (values: RegisterFormValues) => {
    const errors: FormErrors = {};

    if (!values.name) {
      errors.name = FIELD_REQUIRED;
    }

    if (!values.email) {
      errors.email = FIELD_REQUIRED;
    } else if (!isEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = FIELD_REQUIRED;
    } else if (values.password.length < PASSWORD_MIN_LENGTH) {
      errors.password = `Must be at least ${PASSWORD_MIN_LENGTH} characters long.`;
    }

    if (!values.password_confirmation) {
      errors.password_confirmation = FIELD_REQUIRED;
    } else if (values.password_confirmation.length < PASSWORD_MIN_LENGTH) {
      errors.password_confirmation = `Must be at least ${PASSWORD_MIN_LENGTH} characters long.`;
    } else if (!!values.password && values.password_confirmation !== values.password) {
      errors.password_confirmation = PASSWORD_NOT_MATCH;
    }

    return errors;
  },
};

export const CreateTransactionFormSetup = {
  initialValues: {
    amount: undefined,
    category: undefined,
    description: '',
    date: formatDate(new Date(), 'YYYY-MM-DD'),
    account: undefined,
  },
  validate: (values: CreateTransactionFormValues) => {
    const errors: FormErrors = {};

    if (!values.amount) {
      errors.amount = FIELD_REQUIRED;
    } else if (values.amount <= 0) {
      errors.amount = 'Must be higher than 0';
    }

    if (!values.account) {
      errors.account = FIELD_REQUIRED;
    }

    return errors;
  },
};
