import React, { useState, useEffect } from 'react';

interface InputTarget {
  target: {
    name: string;
    value: any;
  };
  persist?: () => void;
}

const useForm = (
  callback: (values: FormValues) => void,
  validate: Function = () => ({}),
  initialValues: FormValues = {},
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting, values]);

  useEffect(() => {
    if (submittedOnce) {
      setErrors(validate(values));
    }
  }, [submittedOnce, validate, values]);

  useEffect(() => {
    if (Object.keys(errors).length > 0 && isSubmitting) {
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting]);

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setSubmittedOnce(true);
    setIsSubmitting(true);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | InputTarget,
  ) => {
    if (event.target && typeof event.target === 'function') {
      event.persist();
    }
    const { target } = event;

    if (target) {
      setValues(v => ({ ...v, [target.name]: target.value }));
    }
  };

  return {
    isSubmitting,
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
