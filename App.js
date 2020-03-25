import React , {useState} from 'react';
import { StyleSheet, Text, View,FlatList,Button,TextInput,TouchableOpacity,ScrollView} from 'react-native';

export default function App() {
  const [tasks,setTasks]=useState(
    [
      {context:"go shopping",id:'1'},
      {context:"make a bed",id:'2'},
      {context:"programming",id:'3'},
     
    ]
  )
  const [keys,setKeys]=useState(4)

  const pressHandler=(id)=>{
    setTasks((e)=>{
      return e.filter((task)=>task.id!=id)
    })
  }
  let newTask=''
  const handleTask=()=>{
    if(newTask!==''){
    setKeys((keys)=>{
      return keys+1
    })
    setTasks((tasks)=>{
     return [...tasks,{context:newTask,id:`${keys}`}]
    })
  }
  }
  
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <Text style={styles.text}>Add task</Text>
      <TextInput style={styles.input}  onChangeText={(e)=>{newTask=e
      }} />
      <Button title="accept" onPress={()=>{
        handleTask()
      }}/>
      <FlatList
      style={styles.taskList}
        data={tasks}
        keyExtractor={(task)=>task.id}
        renderItem={({item})=>(
        <TouchableOpacity onPress={()=>{
          pressHandler(item.id)
        }}>
          <Text style={styles.task}>{item.context}</Text>
          </TouchableOpacity>)
          }  />
    {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  text:{
    padding: 20,
    fontSize:20,
    marginTop:20,
    color:'white'
  },
  input:{
    padding: 20,
    fontSize:20,
    marginTop:5,
    width:350,
    borderWidth:2,
    borderStyle: 'solid',
    borderColor: 'royalblue',
    color:'white',
    marginBottom:10
  },
  task:{
    padding:10,
    fontSize:38,
    color:'white'
  },
  taskList:{
    paddingBottom:100,
    color:'white'
  }
});
