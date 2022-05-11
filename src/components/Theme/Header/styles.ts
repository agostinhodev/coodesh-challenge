import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const FormView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    margin-top: 100px;
    background-color: ${Constants?.manifest?.extra?.colors?.six};
    justify-content: flex-start;
    align-items: center;
`;

export const CloseView = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    z-index: -1;
    padding: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const ViewFilters = styled.ScrollView`
    padding: 15px;
`;

export const Description = styled.Text`
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 15px;
    color: ${Constants.manifest?.extra?.colors.one};
`;

export const PersonalizatedPicker = styled(Picker).attrs({})`
    min-width: 100%;
    border-width: 0.2rem;
    background-color: ${Platform.OS === 'ios'
        ? Constants.manifest?.extra?.colors.six
        : Constants.manifest?.extra?.colors.seven};
`;

export const ViewButton = styled.View`
    min-width: 100%;
    min-height: 100px;
    justify-content: space-between;
    margin-top: 30px;
`;
