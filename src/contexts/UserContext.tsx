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
    isFilterModalOpen: boolean;
    setIsFilterModalOpen(option: boolean): void;
    gender: string;
    setGender(option: string | null): void;
    availableNationality: Array<string>;
    nat: string | null;
    setNat(option: string | null): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [users, setUsers] = useState<UserResponse>({
        results: [],
    } as UserResponse);
    const [results, setResults] = useState<number>(50);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [search, setSearch] = useState<string | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const [nat, setNat] = useState<string | null>(null);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
    const availableNationality = [
        'AU',
        'BR',
        'CA',
        'CH',
        'DE',
        'DK',
        'ES',
        'FI',
        'FR',
        'GB',
        'IE',
        'IR',
        'NL',
        'NZ',
        'TR',
        'US',
        'NO',
        'US',
    ];

    const fetch = async (): Promise<AxiosResponse<UserResponse>> => {
        setIsFetchingData(true);
        setSearch(null);

        let response: Promise<AxiosResponse<UserResponse>> = Promise.resolve(
            await api.get<UserResponse>('', { params: { results, gender, nat } }),
        );

        response
            .then(response => {
                const { data } = response;
                const usersCopy = { ...users };
                usersCopy.results.push(...data.results);
                setUsers(usersCopy);
            })
            .finally(() => setIsFetchingData(false));

        return response;
    };

    return (
        <UserContext.Provider
            value={{
                users,
                fetch,
                isFetchingData,
                currentUser,
                setCurrentUser,
                search,
                setSearch,
                isFilterModalOpen,
                setIsFilterModalOpen,
                gender,
                setGender,
                availableNationality,
                nat,
                setNat,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    const context = useContext(UserContext);
    return context;
}
