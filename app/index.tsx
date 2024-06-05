import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
const palceHolderImage = require('../assets/images/adaptive-icon.png');
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('you did not select any image!..');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {

  };

  const onSaveImageAsync = async () => {

  };

  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer palceholderImageSource={palceHolderImage}
          selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={'refresh'} label={"Reset"} onPress={onReset}></IconButton>
            <CircleButton onPress={onAddSticker}></CircleButton>
            <IconButton icon={'save-alt'} label={"save"} onPress={onSaveImageAsync}></IconButton>
          </View>
        </View>
      ) : (
        <View>
          <Button lable="Choose a photo" theme='primary' onPress={pickImageAsync} />
          <Button lable="Press me" />
          <Button lable="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  imageContainer: {
    flex: 1,
    padding: 50,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
