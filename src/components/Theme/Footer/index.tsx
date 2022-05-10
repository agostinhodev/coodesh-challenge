import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import PersonalizatedModal from '../Modal';

const Footer: React.FC = () => {
    const { currentUser } = useUser();

    return <>{currentUser && <PersonalizatedModal />}</>;
};

export default Footer;
