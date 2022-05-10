import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const FormView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items:center ;
    padding-left: 20px;
    padding-right: 20px;

`;

export const ButtonFilter = styled.TouchableOpacity`
    height: 60px;
`;

export const Total = styled.Text`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${Constants.manifest?.extra?.colors.six};
`;

export const ViewModalFilters = styled.View`
    display: flex;
    flex: 1;
    margin-top: 150px;
    background-color: ${Constants?.manifest?.extra?.colors?.six};
    justify-content:flex-start ;
    align-items: center;
`;

export const CloseView = styled.View`
    
    justify-content: flex-end;
    align-items:flex-end ;
    width: 100%;
    z-index: -1;
    padding: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;
