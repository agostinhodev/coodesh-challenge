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
    color: ${Constants.manifest?.extra?.colors.six}
`;