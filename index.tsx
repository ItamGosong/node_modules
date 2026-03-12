import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */} 
      <Image 
        source={require('../../assets/images/profile.png')}
        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Daffa Miftahur Rahman Nasution</Text>
      <Text style={styles.nim}>NIM: 243303621209</Text>
      <Text style={styles.jurusan}>Jurusan: Sistem Infromasi</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          Kelemahan manusia sering datang dari apa yang paling dia cintai.
            
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE66D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: '#14213D',
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: '#14213D',
    marginBottom: 10,
    letterSpacing: 2,
   },
  jurusan: {
    fontSize: 14,
    color: '#14213D',
    marginBottom: 20,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#14213D',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#14213D',
    width: '100%',
  },
  bioText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});