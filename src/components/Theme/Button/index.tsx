import React, { forwardRef } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    ButtonPersonalizated,
    ButtonPersonalizatedOutline,
    ButtonPersonalizatedText,
} from './styles';

const Button = (props: TouchableOpacityProps | { title: string; type?: string }, ref) => {
    if (props.type !== undefined && props.type === 'outline')
        return (
            <ButtonPersonalizatedOutline {...props} ref={ref}>
                <ButtonPersonalizatedText>{props.title}</ButtonPersonalizatedText>
            </ButtonPersonalizatedOutline>
        );

    return (
        <ButtonPersonalizated {...props} ref={ref}>
            <ButtonPersonalizatedText>{props.title}</ButtonPersonalizatedText>
        </ButtonPersonalizated>
    );
};

export default forwardRef(Button);
