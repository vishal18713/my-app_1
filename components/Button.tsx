import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Button({ lable }) {
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

})