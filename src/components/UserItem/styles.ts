import Constants from "expo-constants";
import styled from "styled-components/native";

export const UserButton = styled.TouchableOpacity`
    background-color: ${Constants?.manifest?.extra?.colors?.six}; 
    margin: 5px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content:space-between ;
    align-items: center;
 

`;

export const ViewImage = styled.View`
    display: flex ;
    flex: .5;
    justify-content: center;
    align-items:center;
    width: 30%;
    padding: 10px;

`;
export const ViewDetails = styled.View`
    display: flex;
    flex: 1.5;
    justify-content: center;
    align-items:flex-start ;
    width: 70%;
    padding: 20px;
`;

export const ViewDetailsContent = styled.View``;

export const ViewFooter = styled.View`
    margin-top: 10px;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;

export const UserImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const Title = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const Value = styled.Text`
  font-family: 'Poppins_400Regular';
`;