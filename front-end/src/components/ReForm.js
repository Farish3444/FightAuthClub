import { TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const ReForm = forwardRef(({ label, value, onChange, className,autoFocus, ...restProps }, ref) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        ref={ref} // Properly forward the ref to the underlying TextField
        variant="outlined"
        {...restProps}
        className={`re-form-input ${className}`}
        autoFocus={autoFocus}
      />
    </>
  );
});

export default ReForm;
