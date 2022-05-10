import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import Footer from '../../components/Theme/Footer';
import Header from '../../components/Theme/Header';
import UserItem from '../../components/UserItem';
import { useUser } from '../../contexts/UserContext';
import { User } from '../../models/Response/UserResponse';
import { Container } from './styles';

const Home: React.FC = () => {
    const { fetch, isFetchingData, users, currentUser, search } = useUser();

    useEffect(() => {
        fetch().catch((error: AxiosError | any) => {
            console.log(error);
        });
    }, []);

    return (
        <Container
            ListHeaderComponent={<Header />}
            ListFooterComponent={<Footer />}
            data={
                search && search.length > 0
                    ? users?.results.filter(
                          item =>
                              item.name.first.indexOf(search) > -1 ||
                              item.name.last.indexOf(search) > -1,
                      )
                    : users?.results
            }
            keyExtractor={(user: User) => user.login.uuid}
            renderItem={(user: User) => <UserItem data={user} />}
            ListEmptyComponent={<></>}
        />
    );
};

export default Home;
