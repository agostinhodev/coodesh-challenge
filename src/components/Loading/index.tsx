import React from 'react';
import { Container, LoadingActivity, LoadingText } from './styles';

interface LoadingProps {
    title: string;
}

const Loading: React.FC<LoadingProps> = ({ title }) => {
    return (
        <Container>
            <LoadingActivity size={50} />
            <LoadingText>{title}</LoadingText>
        </Container>
    );
};

export default Loading;
