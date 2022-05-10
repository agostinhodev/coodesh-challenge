import { AxiosResponse } from 'axios';
import { createContext, useContext, useState } from 'react';
import { User, UserResponse } from '../models/Response/UserResponse';
import api from '../services/api';

interface UserContextData {
    users: UserResponse;
    fetch(): Promise<AxiosResponse<UserResponse>>;
    isFetchingData: boolean;
    currentUser: User | null;
    setCurrentUser(user: User | null): void;
    search: string | null;
    setSearch(value: string | null): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [users, setUsers] = useState<UserResponse>({} as UserResponse);
    const [results, setResults] = useState<number>(50);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [search, setSearch] = useState<string | null>(null);

    const fetch = async (): Promise<AxiosResponse<UserResponse>> => {
        setIsFetchingData(true);

        let response: Promise<AxiosResponse<UserResponse>> = Promise.resolve(
            await api.get<UserResponse>('', { params: { results } }),
        );

        response
            .then(response => {
                const { data } = response;
                setUsers(data);
            })
            .finally(() => setIsFetchingData(false));

        return response;
    };

    return (
        <UserContext.Provider
            value={{ users, fetch, isFetchingData, currentUser, setCurrentUser, search, setSearch }}
        >
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    const context = useContext(UserContext);
    return context;
}
