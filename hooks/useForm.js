import React from 'react';

export const useForm = initialValue => {
  const [values, setValues] = React.useState(initialValue);

  return [
    values,
    (key, value) => {
      setValues({
        ...values,
        [key]: value,
      });
    },
  ];
};
