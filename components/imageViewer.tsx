import { StyleSheet, Text, View,Image } from "react-native";


export default function ImageViewer({palceholderImageSource,selectedImage}) {
    const imageSource = selectedImage ? {uri:selectedImage} :palceholderImageSource;
    return (
        <Image source={imageSource} style = {styles.image}/>
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