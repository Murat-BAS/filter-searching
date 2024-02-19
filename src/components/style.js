import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxImage: {
        backgroundColor: "orange",
        borderRadius: 100,
        flex: 2,
        marginRight: 20
    },
    stockTextCont: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    stockText:{
        color: "red",
        fontWeight: "700"
    },
    boxText: {
        justifyContent: "center",
        flex: 4
    },
    boxContainer: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        padding: 10,
        flexDirection: "row",
        height: 115,

    },
    textTitle: {
        fontSize: 25,
        fontWeight: "700"
    },
    searchBar: {
        margin: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        backgroundColor: "#f5f5f5"
    },
    border:{
        borderWidth: 0.5,
        borderColor: "black"
    }

})

export default mainStyle