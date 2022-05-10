import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import Input from '../Input';
import Logo from '../Logo';
import { Container } from './styles';

const Header: React.FC = () => {
    const { search, setSearch } = useUser();

    return (
        <Container>
            <Logo />
            <Input
                keyboardType="default"
                autoCapitalize="words"
                value={search}
                onChangeText={value => setSearch(value)}
                placeholder="Enter the patient's name to search"
            />
        </Container>
    );
};

export default Header;
