import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';


export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('you did not select any image!..');
    }

  };
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer />
      </View>
      <View>
        <Button lable="Choose a photo" theme='primary' onPress={pickImageAsync}/>
        <Button lable="Press me" />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
  }
});
