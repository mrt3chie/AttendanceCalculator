import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [attendance, setAttendance] = useState('');
  const [totalClasses, setTotalClasses] = useState('');
  const [leaves, setLeaves] = useState(0);
  const [present, setPresent] = useState(0);
  const [difference, setDifference] = useState(0);
  const [newDifference, setNewDifference] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [newPercentage, setNewPercentage] = useState(0);
  const [newnPercentage, setNewnPercentage] = useState(0);

  const calculate = () => {
    const diff = totalClasses - attendance;
    setDifference(diff);
    setCurrentPercentage(Math.round((diff / totalClasses) * 100));
    const newattended = attendance + present;
    const newdiff = (totalClasses + leaves + present) - newattended ;
    setNewDifference(newdiff);
    setNewPercentage(Math.round((newdiff/(totalClasses + leaves + present)) * 100));
    setNewnPercentage(100 - Math.round((newdiff/(totalClasses + leaves + present)) * 100));
(Math.round((newdiff/(totalClasses + leaves + present)) * 100));
  };

  const clear = () => {
    setAttendance('');
    setTotalClasses('');
    setLeaves(0);
    setPresent(0);
    setDifference(0);
    setCurrentPercentage(0);
    setNewPercentage(0);
    setNewnPercentage(0);
    setNewDifference(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.headervw}>
        <Text style={styles.headertxt}>Attendance Calculator - v1.0</Text>
        <Text style={styles.fontSize=10}>Beta Version - 99.9% Accurate result</Text>
      </View>

      <KeyboardAvoidingView>
      <Text >Total Classes</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={text => setTotalClasses(parseInt(text))}
        value={totalClasses.toString()}
        placeholder="Total Classes"
      />
      <Text >Attended Classes</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={text => setAttendance(parseInt(text))}
        value={attendance.toString()}
        placeholder="Total Attended"
      />
      <View style={styles.inputContainer}>
        <Text >Upcoming Leave   </Text>
        <Button title="-" onPress={() => setLeaves(leaves - 1)} />
        <Text style={styles.inputa}>{leaves}</Text>
        <Button title="+" onPress={() => setLeaves(leaves + 1)} />
      </View>
      <View style={styles.inputContainer}>
      <Text >Upcoming Present</Text>
        <Button title="-" onPress={() => setPresent(present - 1)} />
        <Text style={styles.inputa}>{present}</Text>
        <Button title="+" onPress={() => setPresent(present + 1)} />
      </View>
      <View style={styles.btndisp}>
        <Button title="Calculate" onPress={calculate} />
        <Button title="Clear" onPress={clear} />
        <Text style={styles.result}>Current Absent: {difference}</Text>
        <Text style={styles.result}>Absent Percentage: {currentPercentage}%</Text>
        <Text style={styles.result}>Upcoming Absent: {newDifference}</Text>
        <Text style={styles.result}>Updated Percentage: {newPercentage}%</Text>
        <Text style={styles.result}>Final Percentage Reflected: {newnPercentage}%</Text>
      </View>

      </KeyboardAvoidingView>
      <View style = {styles.copyright}>
        <Text >A Quality Product from Techie House</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = {  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  btndisp: {
    paddingTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 200,
    marginVertical: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  copyright: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 10, //Here is the trick
  },
  headervw: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    top:10, //Here is the trick
  },
  headertxt: {
    fontSize: 20,
  }

};

export default App;