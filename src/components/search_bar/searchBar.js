import React from "react";
import { TextInput, View } from "react-native";
import mainStyle from '../style'

const searchBar = (props) => {

    return(
        <TextInput
            placeholder="Ara...."
            style={mainStyle.searchBar}
            onChange={props.onChangeFunc}
        ></TextInput>
    )
}

export default searchBar;