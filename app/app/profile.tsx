import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/signup")}>
        <Text style={styles.buttonText}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#fff", padding:20 },
  title: { fontSize:28, fontWeight:"bold", marginBottom:20 },
  button: { backgroundColor:"#000", paddingVertical:12, paddingHorizontal:20, borderRadius:8 },
  buttonText: { color:"#fff", fontSize:16, fontWeight:"600" }
});
