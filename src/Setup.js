import React, { Component } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import { handleSubmitData, getDataApi } from "./actions/action";
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
        },
        {
          title: "hallo",
          content: "test3"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.dispatch(getDataApi());
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
    console.log(this.props.getData)
    return (
      <ScrollView style={{ flex: 1 }}>
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
          {this.props.getData.map((dataObj, idx) => (
            <View
              style={{
                backgroundColor: "lightblue",
                marginTop: 10,
                borderWidth: 1,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 10
              }}
            >
              <Text style={{ marginLeft: 5, fontSize: 20, color: "#000" }}>
                {dataObj.title}
              </Text>
              <Text style={{ marginLeft: 5 }}>{dataObj.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    getData: state.getData.data,
    isFetching: state.getData.isFetching
  };
};

export default connect(mapStateToProps)(Setup);
