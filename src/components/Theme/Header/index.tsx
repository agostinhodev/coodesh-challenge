import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react';
import { Keyboard, TouchableOpacity } from 'react-native';
import { useUser } from '../../../contexts/UserContext';
import Input from '../Input';
import Logo from '../Logo';
import { Container, Total } from './styles';

const Header: React.FC = () => {
    const { search, setSearch, users } = useUser();

    return (
        <Container>
            <Logo />
            <Input
                keyboardType="default"
                autoCapitalize="words"
                value={search}
                onChangeText={value => setSearch(value)}
                placeholder="Enter the patient's name to search"
                rightIcon={
                    <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                        <MaterialIcons
                            name="person-search"
                            size={24}
                            color={Constants?.manifest?.extra?.colors?.two}
                        />
                    </TouchableOpacity>
                }
            />

            <Total>Total of patients: {users.results.length}</Total>
        </Container>
    );
};

export default Header;
