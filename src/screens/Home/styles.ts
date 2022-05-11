import Constants from "expo-constants";
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import styled from "styled-components/native";

export const Title = styled.Text`
    font-size: 16px;
`;

export const Container = styled(KeyboardAwareFlatList).attrs({
    showsVerticalScrollIndicator: false,
    behavior: 'padding',
    enabled: true
})`
    background-color: ${Constants?.manifest?.extra?.colors?.one}; 
    padding-top: 100px;
    padding-bottom: 100px;
    padding: 10px;
`;