import React, { forwardRef } from 'react';
import { InputProps } from 'react-native-elements';
import { InputField } from './styles';

const Input = (props: InputProps, ref) => {
    return <InputField {...props} ref={ref} />;
};

export default forwardRef(Input);
