import moment from 'moment';
import React from 'react';
import { User } from '../../models/Response/UserResponse';
import {
    Title,
    UserButton,
    UserImage,
    Value,
    ViewDetails,
    ViewDetailsContent,
    ViewFooter,
    ViewImage,
} from './styles';

interface UserItemProps {
    data: {
        index: number;
        item: User;
    };
}

const UserItem: React.FC<UserItemProps> = ({ data }) => {
    const user = data.item;

    return (
        <UserButton>
            <ViewImage>
                <UserImage source={{ uri: user.picture.medium }} />
            </ViewImage>
            <ViewDetails>
                <ViewDetailsContent>
                    <Title>Name:</Title>
                    <Value>{`${user.name.title} ${user.name.first} ${user.name.last} `}</Value>
                </ViewDetailsContent>
                <ViewFooter>
                    <Value>{user.gender === 'male' ? 'Male' : 'Female'}</Value>
                    <Value>{moment(user.dob.date).format('DD/MM/YYYY')}</Value>
                </ViewFooter>
            </ViewDetails>
        </UserButton>
    );
};

export default UserItem;
