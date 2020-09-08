import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: props.navigation,
    };
  }

  render() {
    const { navigation } = this.state;
    const { idea } = this.props.route.params;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={(event) => {
              event.stopPropagation();
              navigation.goBack();
            }}
          >
            <Image
              style={styles.btnMenu}
              source={require("../../assets/icon/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{idea.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={(event) => {
                event.stopPropagation();
                navigation.push("Write", { idea: idea });
              }}
            >
              <Image
                style={styles.btnMenu}
                source={require("../../assets/icon/edit.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._deleteIdea}>
              <Image
                style={styles.btnMenu}
                source={require("../../assets/icon/delete.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.content}>
          <Text style={[styles.text, { color: "#666" }]}># {idea.word}</Text>
          <Text style={[styles.text, { marginTop: 25 }]}>{idea.idea}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: "9%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 30,
  },
  text: {
    fontSize: 18,
    fontFamily: "Noto-Serif-KR",
  },
  btnMenu: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});

export default DetailScreen;