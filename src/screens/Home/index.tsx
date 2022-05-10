import React from 'react';
import Input from '../../components/Theme/Input';
import { Container } from './styles';
const Home: React.FC = () => {
    return (
        <Container>
            <Input keyboardType="default" autoCapitalize="none" />
        </Container>
    );
};

export default Home;
