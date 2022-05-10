import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import Input from '../../components/Theme/Input';
import PersonalizatedModal from '../../components/Theme/Modal';
import UserItem from '../../components/UserItem';
import { useUser } from '../../contexts/UserContext';
import { User } from '../../models/Response/UserResponse';
import { Container } from './styles';

const Home: React.FC = () => {
    const { fetch, isFetchingData, users } = useUser();

    useEffect(() => {
        fetch().catch((error: AxiosError | any) => {
            console.log(error);
        });
    }, []);

    return (
        <Container
            ListHeaderComponent={<Input keyboardType="default" autoCapitalize="none" />}
            ListFooterComponent={<PersonalizatedModal />}
            data={users?.results}
            keyExtractor={(user: User) => user.login.uuid}
            renderItem={(user: User) => <UserItem data={user} />}
        />
    );
};

export default Home;
