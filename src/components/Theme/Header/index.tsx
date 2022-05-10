import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react';
import { Keyboard, Modal, TouchableOpacity } from 'react-native';
import { useUser } from '../../../contexts/UserContext';
import Input from '../Input';
import Logo from '../Logo';
import { ButtonFilter, Container, FormView, Total } from './styles';

const Header: React.FC = () => {
    const { search, setSearch, users, isFilterModalOpen, setIsFilterModalOpen } = useUser();

    return (
        <>
            <Container>
                <Logo />

                <FormView>
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

                    <ButtonFilter onPress={() => setIsFilterModalOpen(true)}>
                        <AntDesign
                            name="filter"
                            size={32}
                            color={Constants?.manifest?.extra?.colors?.six}
                        />
                    </ButtonFilter>
                </FormView>

                <Total>Total of patients: {users.results.length}</Total>
            </Container>

            <Modal
                animationType="slide"
                transparent={false}
                visible={isFilterModalOpen}
                onRequestClose={() => setIsFilterModalOpen(false)}
            ></Modal>
        </>
    );
};

export default Header;
