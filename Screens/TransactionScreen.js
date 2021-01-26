import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';

import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TS extends React.Component 
{
    constructor(){
        super();
        this.setState({
            //jason
            cameraPermissions: null,
            scanned: false,
            scannedData: '',
            jasonInitialized: true
        })
    }

    handleBarCodeScanned(){
      
    }

    getCameraPermissions = async ()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            //jason
            cameraPermissions: status == 'granted'
        })
    }

  render(){
    const hasCameraPermissions = this.state.cameraPermissions;
  return (
    <View style={styles.container}>
      <Text>{
        //turnoryJason
        hasCameraPermissions == true   
        ? (this.state.scannedData)
        : ("Gimme yo camera permissions or get da hail outa here baybe (in southern accent)")
      }</Text>
      <TouchableOpacity onPress={this.getCameraPermissions}>BAR SCAN THANG</TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
