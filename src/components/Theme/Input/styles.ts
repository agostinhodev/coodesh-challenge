import { Input } from "react-native-elements";
import styled from "styled-components/native";

export const InputField = styled(Input).attrs({

    inputContainerStyle: {
        width: '100%',
        backgroundColor: "#F2F2F2",
        height: 65,
        padding: 8,
        borderRadius: 8,
        borderWidth: 1.2,
        borderColor: "#DBDBDB",
    },
    inputStyle: {
        color: "#505050",
        borderRadius: 50,
        marginLeft: 12,
    },

})``;