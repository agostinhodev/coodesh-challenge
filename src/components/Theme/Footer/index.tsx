import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import LoadingActivity from '../../Loading';
import Button from '../Button';
import PersonalizatedModal from '../Modal';

const Footer: React.FC = () => {
    const { currentUser, fetch, isFetchingData } = useUser();

    return (
        <>
            {isFetchingData ? (
                <LoadingActivity title="Loading more..." />
            ) : (
                <Button onPress={() => fetch()} title="Tap to load more..." />
            )}
            {currentUser && <PersonalizatedModal />}
        </>
    );
};

export default Footer;
