import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#f5f5f5", padding:20 },
  title: { fontSize:28, fontWeight:"bold", marginBottom:20 },
  button: { backgroundColor:"#000", paddingVertical:12, paddingHorizontal:20, borderRadius:8 },
  buttonText: { color:"#fff", fontSize:16, fontWeight:"600" }
});
