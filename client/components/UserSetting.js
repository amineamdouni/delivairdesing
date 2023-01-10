import { StyleSheet, View, TextInput, Button,Text } from 'react-native';

const PersonalInformationForm = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Full Name</Text>
          </View>
          <View style={styles.inputColumn}>
            <TextInput style={styles.input} value="John Doe" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Email</Text>
          </View>
          <View style={styles.inputColumn}>
            <TextInput style={styles.input} value="john@example.com" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Phone</Text>
          </View>
          <View style={styles.inputColumn}>
            <TextInput style={styles.input} value="(239) 816-9029" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Mobile</Text>
          </View>
          <View style={styles.inputColumn}>
            <TextInput style={styles.input} value="(320) 380-4539" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.labelColumn}>
            <Text style={styles.labelText}>Address</Text>
          </View>
          <View style={styles.inputColumn}>
            <TextInput style={styles.input} value="Bay Area, San Francisco, CA" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.emptyColumn} />
          <View style={styles.buttonColumn}>
            <Button title="Save Changes" color="#007bff" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 1.5,
    shadowColor: '#dadae3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.65,
    shadowRadius: 2,
  },
  cardBody: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  labelColumn: {
    width: 80,
  },
  labelText: {
    fontSize: 14,
    color: '#495057'},
    inputColumn: {
      flex: 1,
    },
    input: {
      height: 40,
      borderColor: '#ced4da',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    emptyColumn: {
      width: 80,
    },
    buttonColumn: {
      flex: 1,
      alignItems: 'flex-end',
    }
  })


export default PersonalInformationForm;