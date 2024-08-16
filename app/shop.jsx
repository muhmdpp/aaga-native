import { View, Text,StyleSheet, Image,ScrollView, VirtualizedList, ImageBackground} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import banner1 from '../assets/images/banner1.jpg'
import garden from "../assets/images/garden.jpg"
import pp from "../assets/images/p1.jpg"
const shop = () => {
  return (
    <View style={styles.container}> 
     <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#000']}
        style={styles.background} dither={true}
      />
    <View style={styles.searchBox}>
      <Ionicons name='search-outline' color={"#e5e4e2"} size={30} style={{marginLeft:10,opacity:0.3}}/>
      <Text style={{color:'#E5E4E2',fontSize:17,marginLeft:3,opacity:0.3}}>Search Plant</Text>
    </View>


    <View style={styles.banner}>
     <Image source={garden} style={styles.imageFit}/>
    </View>
    <View style={styles.scrollableFiltersContainer}>
    
      <View style={styles.filters}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.filterFOCUS}>
        <Text style={styles.filterTextFOCUS}>All</Text>
        </View>

        <View style={styles.filter}>
        <Text style={styles.filterText}>Indoor</Text>
        </View>

        <View style={styles.filter}>
        <Text style={styles.filterText}>Outdoor</Text>
        </View>

        <View style={styles.filter}>
        <Text style={styles.filterText}>Garden</Text>
        </View>

        <View style={styles.filter}>
        <Text style={styles.filterText}>Office</Text>
        </View>
        
       
        </ScrollView>
      </View>
    </View>

    <View style={styles.midTitle}>
      <Text style={{color:"#fff",fontSize:20,fontWeight:'bold',padding:15}}>Recommended for You</Text>
      <Text style={{color:"#fff",fontSize:15,padding:16}}>see all</Text>
    </View>
    <ScrollView>
    <View style={styles.productScrollSection}>
      
      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={pp} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>

      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>

      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>

      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>
      
      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>

      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>

      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>

      <View style={styles.productBox}>
        <View style={styles.photoArea}>
          <Image source={garden} style={styles.imageFit} />
            
        </View>
        <View style={styles.PlantDesc}>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16}}>Aloe Vera</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Rs.1234.00</Text>
          </View>
         <Ionicons name='add-circle-outline' size={30} style={{marginTop:10}} color={"#10332d"}/>
        </View>
      </View>
   
    </View>
    </ScrollView>
  
  </View>
  )
}

export default shop

const styles= StyleSheet.create({
  container:{
    flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#10332d',
      
  },
  text:{
    color:'#fff'
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity:0.3
  },
  imageFit:{
    width:'100%',
    height:'100%',
    objectFit:'cover'
  },
  searchBox:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:380,
    height:45,
    backgroundColor:'#0e201d',
    marginTop:15,
    borderRadius:10
  },
  banner:{
    marginTop:18,
    width:380,
    height:125,
    backgroundColor:'#0e201d',
    borderRadius:20,
    overflow:'hidden',
    // marginLeft:8
  },
  scrollableFiltersContainer:{
    marginTop:10,
    width:'100%',
    height:45,
    // backgroundColor:"#fff",
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  filter:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    height:35,
    minWidth:65,
    width:'auto',
    borderWidth:1,
    borderColor:'rgba(255, 255, 255, 0.2)',
    
    borderRadius:35,
    marginLeft:10
  },
  PlantDesc:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    // marginBottom:4
  },
  filterText:{
    fontSize:18,
    color:"#fff",
    opacity:0.7,
    paddingLeft:10,
    paddingRight:10
  },
  filterTextFOCUS:{
    fontSize:18,
    color:"#000",
    opacity:0.7,
    paddingLeft:10,
    paddingRight:10
  },
  filterFOCUS:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    height:35,
    minWidth:65,
    width:'auto',
    borderWidth:1,
    backgroundColor:"#fff",
    borderColor:'rgba(255, 255, 255, 0.2)',
    
    borderRadius:35,
    marginLeft:10,
  },
  filters:{
    display:"flex",
    flexDirection:'row'
  },
  midTitle:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center'
  },
  productBox:{
    width:170,
    height:200,
    backgroundColor:'#d9dca7',
    margin:10,
    borderRadius:24,
    overflow:'hidden'
  },
  productScrollSection:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    width:'100%',
    // height:400
  },
  photoArea:{
    width:170,
    height:140,
    borderBottomEndRadius:20,
    borderBottomLeftRadius:20,
    overflow:'hidden'
  }
})