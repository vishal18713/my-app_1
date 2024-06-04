import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Button({ lable,theme,onPress }) {

    if (theme === 'primary') {
        return(
            <View style={[styles.buttonContainer,{borderWidth:4,borderColor:'#ffd33d',borderRadius:5}]}>
            <Pressable style={[styles.button,{backgroundColor:'#fff'}]} onPress={onPress}>
                <FontAwesome name="picture-o" size={18} color='#25292e' style={styles.buttonIcon}/>
                <Text style = {[styles.buttonLabel,{color:'#25292e'}]}>{lable}</Text>
            </Pressable>
        </View>

        )
        
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('you touched ' + `${lable}`)}>
                <Text style = {styles.buttonLabel}>{lable}</Text>
            </Pressable>
        </View>

    );
};


const styles = StyleSheet.create({
    buttonContainer:{
        width:300,
        height:60,
        backgroundColor:'blue',
        padding:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    button:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    buttonLabel:{
        color:'#fff',
        fontSize:20,
    },
    buttonIcon:{
        paddingRight:8,
    },

})