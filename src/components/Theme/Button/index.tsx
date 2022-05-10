import React, { forwardRef } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonPersonalizated, ButtonPersonalizatedText } from './styles';

const Button = (props: TouchableOpacityProps | { title: string }, ref) => {
    return (
        <ButtonPersonalizated {...props} ref={ref}>
            <ButtonPersonalizatedText>{props.title}</ButtonPersonalizatedText>
        </ButtonPersonalizated>
    );
};

export default forwardRef(Button);
