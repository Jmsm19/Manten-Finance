import React from 'react';
import NumberFormat from 'react-number-format';

interface InputTarget {
  target: {
    name: string;
    value: any;
  };
  persist?: () => void;
}

interface Props {
  inputRef: any;
  currency: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | InputTarget) => void;
}

const TransactionAmountInputNumberMask: React.FC<Props> = ({
  currency,
  inputRef,
  onChange,
  ...rest
}) => {
  return (
    <NumberFormat
      {...rest}
      thousandSeparator
      decimalScale={2}
      fixedDecimalScale
      allowLeadingZeros={false}
      prefix={currency}
      inputMode="numeric"
      getInputRef={inputRef}
      onValueChange={v => {
        onChange({
          target: {
            name: 'amount',
            value: v.value,
          },
        });
      }}
    />
  );
};

TransactionAmountInputNumberMask.defaultProps = {
  currency: '$',
};

export default TransactionAmountInputNumberMask;
