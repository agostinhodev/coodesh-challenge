import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Total = styled.Text`
    font-size: 16px;
    margin-bottom: 15px;
    color: ${Constants.manifest?.extra?.colors.six}
`;