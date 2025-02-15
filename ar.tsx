import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TelaAr(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "leaf" size={100} color="#22c50b"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>Ar</Text>
        </View>
    )
}