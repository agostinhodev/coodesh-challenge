import React from 'react';
import { LogoImage } from './styles';

const Logo: React.FC = () => {
    const image = require('../../../assets/images/transparent_logo.png');

    return <LogoImage source={image} />;
};

export default Logo;
