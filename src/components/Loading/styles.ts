import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`

    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;

`;

export const LoadingActivity = styled.ActivityIndicator`



`;

export const LoadingText = styled.Text`

    font-family: 'Poppins_600SemiBold';  
    font-size: 16px;
    color: ${Constants.manifest.extra.colors.six}

`;