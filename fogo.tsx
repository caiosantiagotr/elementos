import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TelaFogo (){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "flame" size={100} color="#f44336" />
            <Text style ={{fontSize: 20, fontWeight:700}}>Fogo</Text>
        </View>
    )
}