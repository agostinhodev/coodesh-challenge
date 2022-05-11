import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react';
import { Keyboard, Modal, TouchableOpacity } from 'react-native';
import { useUser } from '../../../contexts/UserContext';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
import {
    ButtonClose,
    ButtonFilter,
    CloseView,
    Container,
    Description,
    FormView,
    PersonalizatedPicker,
    Total,
    ViewButton,
    ViewFilters,
    ViewModalFilters,
} from './styles';

const Header: React.FC = () => {
    const {
        search,
        setSearch,
        users,
        isFilterModalOpen,
        setIsFilterModalOpen,
        gender,
        setGender,
        availableNationality,
        nat,
        setNat,
        fetch,
    } = useUser();

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
                transparent={true}
                visible={isFilterModalOpen}
                onRequestClose={() => setIsFilterModalOpen(false)}
            >
                <ViewModalFilters>
                    <CloseView>
                        <ButtonClose onPress={() => setIsFilterModalOpen(false)}>
                            <AntDesign
                                size={24}
                                color={Constants.manifest.extra.colors.four}
                                name="closecircle"
                            />
                        </ButtonClose>
                    </CloseView>

                    <ViewFilters
                        contentContainerStyle={{
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Description>Select a Gender</Description>
                        <PersonalizatedPicker
                            selectedValue={gender}
                            onValueChange={(itemValue: string) => setGender(itemValue)}
                        >
                            <PersonalizatedPicker.Item label="Male" value="male" />
                            <PersonalizatedPicker.Item label="Female" value="female" />
                        </PersonalizatedPicker>

                        <Description>Select a Nationality</Description>
                        <PersonalizatedPicker
                            selectedValue={nat}
                            onValueChange={(itemValue: string) => setNat(itemValue)}
                        >
                            {availableNationality.length > 0 &&
                                availableNationality.map((item, index) => (
                                    <PersonalizatedPicker.Item
                                        key={index}
                                        label={item}
                                        value={item}
                                    />
                                ))}
                        </PersonalizatedPicker>
                        <ViewButton>
                            <Button
                                title="Apply Filter"
                                onPress={() => {
                                    fetch('filter');
                                    setIsFilterModalOpen(false);
                                }}
                            />
                        </ViewButton>
                    </ViewFilters>
                </ViewModalFilters>
            </Modal>
        </>
    );
};

export default Header;
