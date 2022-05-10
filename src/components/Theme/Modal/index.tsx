import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import moment from 'moment';
import React from 'react';
import { Modal } from 'react-native';
import { useUser } from '../../../contexts/UserContext';
import {
    ButtonClose,
    CloseView,
    Title,
    UserImageDetails,
    UserName,
    Value,
    ViewContent,
    ViewModal,
    ViewModalImage,
    ViewUserDetails,
} from './styles';

const PersonalizatedModal: React.FC = () => {
    const { currentUser, setCurrentUser } = useUser();

    const address = currentUser?.location;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={currentUser !== null}
            onRequestClose={() => setCurrentUser(null)}
        >
            {currentUser && (
                <ViewModal>
                    <ViewModalImage>
                        <UserImageDetails source={{ uri: currentUser.picture.medium }} />
                    </ViewModalImage>
                    <CloseView>
                        <ButtonClose onPress={() => setCurrentUser(null)}>
                            <AntDesign
                                size={24}
                                color={Constants.manifest.extra.colors.four}
                                name="closecircle"
                            />
                        </ButtonClose>
                    </CloseView>

                    <UserName>{`${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`}</UserName>
                    <ViewUserDetails
                        contentContainerStyle={{
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <ViewContent>
                            <Title>Email: </Title>
                            <Value>{currentUser.email}</Value>
                        </ViewContent>
                        <ViewContent>
                            <Title>Gender: </Title>
                            <Value>{currentUser.gender === 'male' ? 'Male' : 'Female'}</Value>
                        </ViewContent>
                        <ViewContent>
                            <Title>BirthDate: </Title>
                            <Value>{moment(currentUser.dob.date).format('DD/MM/YYYY')}</Value>
                        </ViewContent>
                        <ViewContent>
                            <Title>Phone: </Title>
                            <Value>{currentUser.phone}</Value>
                        </ViewContent>
                        <ViewContent>
                            <Title>Nationality: </Title>
                            <Value>{currentUser.nat}</Value>
                        </ViewContent>
                        <ViewContent>
                            <Title>Address: </Title>
                            <Value>{`${address.street.name}, ${address.street.number}\nCity: ${address.city}\nState: ${address.state}\nCountry: ${address.country}\nZIP: ${address.postcode}`}</Value>
                        </ViewContent>
                    </ViewUserDetails>
                </ViewModal>
            )}
        </Modal>
    );
};

export default PersonalizatedModal;
