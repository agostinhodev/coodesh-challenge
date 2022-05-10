import Constants from "expo-constants";
import styled from "styled-components/native";

export const ViewModal = styled.View`
    display: flex;
    flex: 1;
    margin-top: 150px;
    background-color: ${Constants?.manifest?.extra?.colors?.six};
    justify-content:flex-start ;
    align-items: center;
`;

export const CloseView = styled.View`
    margin-top: -25px;
    justify-content: flex-end;
    align-items:flex-end ;
    width: 100%;
    z-index: -1;
    padding: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;


export const ViewModalImage = styled.View`
    margin-top: -50px;
`;

export const UserImageDetails = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 50px;
`;

export const ViewUserDetails = styled.ScrollView`
    padding: 15px;
    display: flex;
    flex: 1;
`;

export const UserName = styled.Text`
    font-family: 'Poppins_600SemiBold';  
    font-size: 24px;
    padding: 15px;
`;

export const ViewContent = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-family: 'Poppins_600SemiBold';
`;

export const Value = styled.Text`
    font-family: 'Poppins_400Regular';
`;