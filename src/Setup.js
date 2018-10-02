import React, { Component } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { handleSubmitData } from "./actions/action";
import { connect } from "react-redux";

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      notes: "",
      dataNotesDummy: [
        {
          title: "hai",
          content: "Test"
        },
        {
          title: "hello",
          content: "Test 1"
        },
        {
          title: "hey",
          content: "Test 2"
        }
      ]
    };
  }

  submitData = () => {
    const { title, notes } = this.state;
    if (title !== "" && notes !== "") {
      this.props.dispatch(handleSubmitData(title, notes));
    } else {
      Alert.alert("Warning!", "Fields can not be empty!");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TextInput
            onChangeText={txt => this.setState({ title: txt })}
            placeholder="Title..."
            style={{ backgroundColor: "yellow" }}
          />
          <TextInput
            onChangeText={txt => this.setState({ notes: txt })}
            placeholder="Notes..."
            style={{ backgroundColor: "orange" }}
          />
          <Button onPress={this.submitData} title="Submit" color="#841584" />
        </View>

        <View style={{ flex: 1 }}>
          {this.state.dataNotesDummy.map((dataObj, idx) => (
            <View>
              <Text>{dataObj.title}</Text>
              <Text>{dataObj.content}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default connect()(Setup);
