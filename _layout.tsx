import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Elementos',
          }}
        />
        <Drawer.Screen
          name="fogo"
          options={{
            drawerLabel: 'Fogo',
            title: 'Fogo',
            drawerIcon: () => <Ionicons name="flame-outline"
            size={18} color="#f44336"/>
          }}
        />
        <Drawer.Screen
          name="agua"
          options={{
            drawerLabel: 'Água',
            title: 'Água',
            drawerIcon: () => <Ionicons name="water-outline"
            size={18} color="#3A98FF"/>
          }}
        />
        <Drawer.Screen
          name="ar"
          options={{
            drawerLabel: 'Ar',
            title: 'Ar',
            drawerIcon: () => <Ionicons name="leaf-outline"
            size={18} color="#22c50b"/>
          }}
        />
        <Drawer.Screen
          name="terra"
          options={{
            drawerLabel: 'Terra',
            title: 'Terra',
            drawerIcon: () => <Ionicons name="golf-outline"
            size={18} color="#783f04"/>
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
