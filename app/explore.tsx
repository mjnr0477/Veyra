import { View, Text, StyleSheet } from "react-native";
export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#f0f0f0" },
  title: { fontSize:28, fontWeight:"bold" }
});
