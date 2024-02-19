import { FlatList, View, Text, Image } from "react-native";
import mainStyle from '../style'

function stockCheck(stockStat){
    if(stockStat == false){
        return(
            "Tükendi"
        )
    }
    else{
        return(
            null
        )
    }
}


const Box = ({ musicTitle }) => {

    return (
        <View style={mainStyle.boxContainer}>
            <Image source={{ uri: musicTitle.imageUrl }} style={mainStyle.boxImage}></Image>
            <View style={mainStyle.boxText}>
                <Text style={mainStyle.textTitle}>{musicTitle.title}</Text>
                <Text style={mainStyle.textYear}>{musicTitle.year}</Text>
            </View>
            <View style={mainStyle.stockTextCont}>
                <Text style={mainStyle.stockText}>{stockCheck(musicTitle.stock)}</Text>
            </View>
        </View>
    )
}

export default Box