import { StyleSheet, Text, View,Image } from "react-native";
const palceHolderImage = require('../assets/images/adaptive-icon.png');

export default function ImageViewer() {
    return (
        <Image source = {palceHolderImage} style = {styles.image}/>
    );
};


const styles = StyleSheet.create({
    image:{
        width:200,
        height:300,
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
      },
})