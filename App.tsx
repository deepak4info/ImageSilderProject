import { StyleSheet, Text, View,FlatList, Dimensions, TouchableOpacity, Animated} from 'react-native'
import React,{useRef, useState} from 'react'
const {width, height} =Dimensions.get('window')


const App = () => {
  const [data,setData] = useState([1,1,1,1,1])
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef();

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <View style={{height:height/2}}>
       <Animated.FlatList
       data={data}
       showsHorizontalScrollIndicator={false}
       pagingEnabled
       horizontal
       ref={ref}
       onScroll={e=>{
        const x = e.nativeEvent.contentOffset.x;  
          setCurrentIndex((x/width).toFixed(0));
      }}
       renderItem={({item,index})=>{
        return(
          <Animated.View style={{width:width, height:height/2, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity 
            disabled={true}
            style={{width:'90%', height:'90%',backgroundColor:'green', borderRadius:10}}>

            </TouchableOpacity>

            </Animated.View>
        )
       }}
       
       />
      </View>
      <View style={{flexDirection:'row', width:width,justifyContent:'center',alignItems:'center'}}>
  {data.map((item,index)=>{
    return(
      <View style={{width:8, height:8,borderRadius:4, 
      backgroundColor:currentIndex == index ? 'green': 'gray', marginLeft:5}}>
        </View>
    )
  })}
      </View>
      <View style={{
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        marginTop:40,
      }}>
        {currentIndex == 0 ? null : (
          <TouchableOpacity style={{
  width:data.length - 1 == currentIndex ? '90%' : 100,
  height:40,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'orange'
}}
onPress={()=>{
  setCurrentIndex(currentIndex - 1);
  ref.current.scrollToIndex({
    animate:true,
    index:parseInt (currentIndex) - 1, 
  })
}}
>
  <Text> Previous</Text>
</TouchableOpacity>
        )}
{data.length -1 == currentIndex ? null : (
  <TouchableOpacity style={{
  width:currentIndex == 0 ? '90%' : 100,
  height:40,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'orange'
}}
onPress={()=>{
  setCurrentIndex(currentIndex + 1);
  ref.current.scrollToIndex({
    animate:true,
    index:parseInt (currentIndex) + 1, 
  })
}}
>
  <Text> Next</Text>
</TouchableOpacity>
)}

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})