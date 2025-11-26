import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/home")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", alignItems:"center", padding:20, backgroundColor:"#f5f5f5" },
  title: { fontSize:28, fontWeight:"bold", marginBottom:20 },
  input: { width:"100%", padding:12, marginBottom:15, borderWidth:1, borderColor:"#ccc", borderRadius:8 },
  button: { backgroundColor:"#000", paddingVertical:12, paddingHorizontal:20, borderRadius:8 },
  buttonText: { color:"#fff", fontSize:16, fontWeight:"600" }
});
