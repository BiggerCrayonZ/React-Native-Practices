import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: "",
    }
  }

  setText = (value) => {
    console.log(value);
    this.setState({
      texto: value
    });
  }

  setTask = (task) => {
    this.setState({
      tareas: [...this.state.tareas, task],
      texto: '',
    });
    console.log("Task state: ", this.state.tareas.length);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header cambiarTexto={this.setText} agregar={this.setTask} texto={this.state.texto} />
        <Text>{this.state.texto}</Text>
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
