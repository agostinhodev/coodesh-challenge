import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import Button from '../Button';
import PersonalizatedModal from '../Modal';

const Footer: React.FC = () => {
    const { currentUser, fetch } = useUser();

    return (
        <>
            <Button onPress={() => fetch()} title="Test" />
            {currentUser && <PersonalizatedModal />}
        </>
    );
};

export default Footer;
