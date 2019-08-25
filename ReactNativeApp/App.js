import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ToolbarAndroid,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
  },
  textInput: {
    flex: 1,
    padding: 8,
    textAlignVertical: 'top',
    fontSize: 20,
    margin: 16,
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
  },
  textArea: {
    flex: 3,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  submitButton: {
    flex: 0.75,
    marginVertical: 16,
    marginHorizontal: 100,
    borderRadius: 8,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isLoading: false,
    };
  }

  _onSubmit() {
    this.setState({isLoading: true});
    fetch('https://larareact.herokuapp.com/public/api/contact_forms', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      }),
    })
      .then(response => response.json())
      .then(response => {
        alert(
          'You can view what you just uploaded at \nhttps://larareact.herokuapp.com/public/api/contact_forms/' +
            response.id,
        );
        this.setState({isLoading: false});
      })
      .catch(error => {
        this.setState({isLoading: false});
        alert(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar} title="Contact Form" />
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Subject"
            onChangeText={subject => this.setState({subject})}
            value={this.state.subject}
          />
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Message"
            onChangeText={message => this.setState({message})}
            value={this.state.message}
          />
          <View style={styles.submitButton}>
            <Button
              onPress={this._onSubmit.bind(this)}
              title="Submit"
              color="#40C4FF"
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
