import Constants from "expo-constants";
import styled from "styled-components/native";

export const ButtonPersonalizated = styled.TouchableOpacity`

    background-color: ${Constants.manifest.extra.colors.five};

    border-radius: 10px;
    height: 45px;
    justify-content: center;
    align-items: center;
  
`;
export const ButtonPersonalizatedOutline = styled.TouchableOpacity`

    border-color: ${Constants.manifest.extra.colors.five};
    border-width: 2px;
    border-radius: 10px;
    height: 45px;
    justify-content: center;
    align-items: center;
  
`;


export const ButtonPersonalizatedText = styled.Text`

    font-family: 'Poppins_600SemiBold';  
    font-size: 16px;
`;
