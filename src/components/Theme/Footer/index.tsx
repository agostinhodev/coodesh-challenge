import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import LoadingActivity from '../../Loading';
import Button from '../Button';
import PersonalizatedModal from '../Modal';
import { ViewButton } from './styles';

const Footer: React.FC = () => {
    const { currentUser, fetch, isFetchingData } = useUser();

    return (
        <ViewButton>
            {isFetchingData ? (
                <LoadingActivity title="Loading more..." />
            ) : (
                <Button onPress={() => fetch()} title="Tap to load more..." />
            )}
            {currentUser && <PersonalizatedModal />}
        </ViewButton>
    );
};

export default Footer;
