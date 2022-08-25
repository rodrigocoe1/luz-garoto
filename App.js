import {SafeAreaView,FlatList, StyleSheet,Image, Text, View,Button } from 'react-native';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
export default function App() {
  return (
    <SafeAreaView style= {StyleSheet.container}>

    </SafeAreaView>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'  
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
  }
})
