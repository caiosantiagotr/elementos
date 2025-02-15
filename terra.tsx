import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TelaTerra(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "golf" size={100} color="#783f04"/>
            <Text style ={{fontSize: 20, fontWeight:700}}>Terra</Text>
        </View>
    )
}