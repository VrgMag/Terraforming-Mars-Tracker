/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { useState } from 'react';
import React from 'react';
import { useRef } from 'react';
import type {Node} from 'react';
import korporacijemap from './index.js';
import korporacije from './Corps.js';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Animated,
  ImageBackground, 
  TextInput,

} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

//Tabs
import svemir from './assets/svemir.jpg';
import okvir from './assets/okvir.png';
import reset from './assets/reset.png';
import lovagore from './assets/lovagore.jpg';
import lovadole from './assets/lovadole.jpg';
import mars from './assets/mars.jpg';
//Photo
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const MyStack = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Terraforming Mars Tracker', alignContent: 'center' }}
        />
        <Stack.Screen name="Tracker" component={ProfileScreen} />
      </Stack.Navigator>
    
  );
};
const changeImage = (setImageIndex) => {
  const randomNumber = Math.floor(Math.random() * korporacije.length);
  setImageIndex(randomNumber);
};

const proverateksta = () => {
  
  for (let key in korporacijemap)
  {  
     return korporacijemap.key;
      
  }  
 
 
};

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  
  const [currentImageIndex, setImageIndex] = useState(1);
  const [alignItems, setAlignItems] = useState("center");
  
  return (
   
     <ImageBackground source={svemir} resizeMode="cover" style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'

     }}>
    

      <View style = {{
        backgroundColor: 'white',
        marginTop: 25,
        width: 240,
      
      }}><TextInput
        style={{height: 40, color: 'black'}}
        placeholder="Search for your Corporation"
        onChangeText={text => setText(text)
        
                  }
        
        defaultValue={text}
      //  onPress={() => {setImageIndex(proverateksta(text))}}
        
      />  
      <Image source = {korporacijemap.saturn} style={{
            flex: 1, width:300     
      }}/>
      </View>
      <TouchableOpacity style={{flex: 1, width:300, marginTop: 20, alignItems: 'center'}}
       onPress={()=>{navigation.navigate('Tracker', { name: 'Tracker' })}}
       
      >   
        <Image  
                source={korporacije[currentImageIndex]}
                     style={{flex: 1, width:320}}
         ></Image>                 
       </TouchableOpacity>
         <Text style = {{
           fontSize: 20,
           color: 'red'
         }}>{proverateksta()}</Text>
      <View style = {{
               
                width: 285,
                height: 50,
                marginTop: 25, 
                alignItems: 'center'
            


           }}>
          <Button
            title="Random corporation"
            onPress={() =>
              changeImage(setImageIndex)
               //navigation.navigate('Profile', { name: 'Jane' })
               //setImageIndex(proverateksta('saturn'))
               
            }
          />
          
      </View>
    </ImageBackground>
          
    
  );
};
 /*<Button
            title="^"
            onPress={() =>
              changeImage(setImageIndex)
               //navigation.navigate('Profile', { name: 'Jane' })
               //setImageIndex(proverateksta('saturn'))
               
            }
          />
       <Text>0</Text>
       <Button
            title="^"
            onPress={() =>
              changeImage(setImageIndex)
               //navigation.navigate('Profile', { name: 'Jane' })
               //setImageIndex(proverateksta('saturn'))
               
            }
          />*/

const ProfileScreen = ({ navigation, route }) => {
  const [lova, setLova] = useState(0);
  const [prodlova, setProdlova] = useState(0);
  const [celik, setCelik] = useState(0);
  const [prodcelik, setProdcelik] = useState(0);
  const [biljke, setBiljke] = useState(0);
  const [prodbiljke, setProdbiljke] = useState(0);
  const [titanijum, setTitanijum] = useState(0);
  const [prodtitanijum, setProdtitanijum] = useState(0);
  const [struja, setStruja] = useState(0);
  const [prodstruja, setProdstruja] = useState(0);
  const [toplota, setToplota] = useState(0);
  const [prodtoplota, setProdtoplota] = useState(0);
  const [TR, setTR] = useState(20);
  const [brrunde, setBrrunde] = useState(1);
  return(
    
    <ImageBackground source={okvir} style={{
      
      flex: 1,
      justifyContent: 'space-between'
     }}>
     
     <View style = {{
       flexDirection: 'column',
       flexWrap: 'wrap'
     }}>
     {Counters(lova,setLova,lovagore,lovadole, 32, 19,0,'black')}      
     {Counters(prodlova,setProdlova,lovagore,lovadole, 32, 129,0,'black')}
     {Counters(biljke,setBiljke,lovagore,lovadole, 32, 195,0,'black')}     
     {Counters(prodbiljke,setProdbiljke,lovagore,lovadole, 32, 305,0,'black')} 
     {Counters(struja,setStruja,lovagore,lovadole, 32, 371,0,'black')} 
     {Counters(prodstruja,setProdstruja,lovagore,lovadole, 32, 481,0,'black')} 
     {Counters(celik,setCelik,lovagore,lovadole, 242, 19,0,'black')}      
     {Counters(prodcelik,setProdcelik,lovagore,lovadole, 242, 129,0,'black')}
     {Counters(titanijum,setTitanijum,lovagore,lovadole, 242, 195,0,'black')}     
     {Counters(prodtitanijum,setProdtitanijum,lovagore,lovadole, 242, 305,0,'black')} 
     {Counters(toplota,setToplota,lovagore,lovadole, 242, 371,0,'black')} 
     {Counters(prodtoplota,setProdtoplota,lovagore,lovadole, 242, 481,0,'black')}   
     {Counters(TR,setTR,lovagore,lovadole, 32, 559,19,'#B22222')} 
    </View>
     <View style={{flexDirection:'row-reverse',
}}>
   
      <TouchableOpacity
      style= {{alignSelf:'flex-end'}}
      onPress={()=>{
          
          setLova(0);
          setProdlova(0);
          setBiljke(0);
          setProdbiljke(0);
          setStruja(0);
          setProdstruja(0);
          setCelik(0);
          setProdcelik(0);
          setTitanijum(0);
          setProdtitanijum(0);
          setToplota(0);
          setProdtoplota(0);
          setTR(20);
          setBrrunde(1)

         }}       
    > 
    <Image source = {reset}></Image>
      
    </TouchableOpacity>
    <Text style={{
      fontSize: 26,
      color: "orange",
      marginTop: 12,
      marginRight: 15

    }}>{brrunde}</Text>
   
    <TouchableOpacity
      style= {{alignSelf:'center', left: 172,  position: 'absolute'}}
      onPress={()=>{
          
          setLova(TR+prodlova+lova);
          setBiljke(biljke+prodbiljke);
          setCelik(celik+prodcelik);
          setTitanijum(titanijum+prodtitanijum);
          setStruja(prodstruja);
          setToplota(struja+toplota+prodtoplota);
          setBrrunde(brrunde+1);

         }}
      
      
    >
      <Image source = {mars}
      
      ></Image>
    </TouchableOpacity>
    </View>
     </ImageBackground>
  ) ;



};
const Counters = (currentTab,setCurrentTab, imagegore,imagedole, positionx, positiony, middle, boja) => {

  return(     
        <View style={{ 
        //alignContent: 'stretch', 
        //flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'absolute'
        }}>
        <TouchableOpacity onPress={()=>{
          
          setCurrentTab(currentTab--);

         }}
         onLongPress={() => {
          setCurrentTab(currentTab-10);
         }}
         delayLongPress={500}
         style={{
          
          
          left: positionx,
           top: positiony,
           
           
           }}
          >
         <View >

          <Image source={imagedole} style={{
            width: 28,
            height: 28,
           // tintColor: currentTab == title ? "#1e90ff" : "white"

          }}></Image>
          

          

          </View>
        </TouchableOpacity >

        <Text style={{
            left: positionx+32-middle,
            top: positiony-2,
            fontSize: 23,
            fontWeight: 'bold',
           
            color: boja
          }}>{currentTab}</Text>

        <TouchableOpacity style={{  top: positiony,
                    left: positionx+116-(2*middle),flexDirection: 'row', position: 'absolute'}}
        
        onPress={()=>{
  
           setCurrentTab(currentTab++);

         }}
         onLongPress={() => {
          setCurrentTab(currentTab+10);
      }}
      delayLongPress={500}>
                    <View style={{                 
                                     
       
                     }}>
       
                     <Image source={imagegore} style={{
                       
                       width: 28,
                       height: 28,
                       //tintColor: currentTab == title ? "#1e90ff" : "white"
       
                     }}></Image>
                    
                                
       
                     </View>
                   </TouchableOpacity>

                   </View>

);

}
const Stack = createStackNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
/*
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  //Animated properties

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Initially must be 1
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
   */
  return (
  <NavigationContainer>
    {MyStack()}
  </NavigationContainer>

  );
       /*<SafeAreaView style={styles.container}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />           
        <View
          style={{justifyContent: 'flex-start', padding: 20}} >
          
          <Image source={oxylogo} style = {{
               alignItems: 'center',
               width: 185,
                height: 50,
                borderRadius: 15,
                marginTop: 0, 
                flex: 1

           }}></Image >
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#ffa500',
          marginTop: 15,
        }}>
         Menu</Text>    
         
         <TouchableOpacity>
           <Text style={{
             marginTop:6,
             color: "#ffa500",
           }}>View Profile</Text>

         </TouchableOpacity>
         
          <View style = {{flexGrow: 1, marginTop: 20}}>
           {
              // Tab Bar Buttons...

           }
           
           {TabButton(currentTab,setCurrentTab,"Home",home)}
           {TabButton(currentTab,setCurrentTab,"Search",search)}
           {TabButton(currentTab,setCurrentTab,"Notifications",notifications)}
           {TabButton(currentTab,setCurrentTab,"Settings",settings)}
          </View> 

            <View>
          {TabButton(currentTab,setCurrentTab,"Logout",logout)}
            </View>

        </View>
        
       {
        // Overlay view
               
       }  

       <Animated.View style={{
       flexGrow: 1,
       backgroundColor: 'white',
       position: 'absolute',
       top: 0,
       bottom: 0,
       left: 0,
       right: 0,
       borderRadius: showMenu ? 15 : 0,
       // Transforming View...
       
       transform:[
         {scale: scaleValue},
         { translateX: offsetValue}
          
      
           ]
         }}>
        
        {
        //Menu buttons 

        }
       
           
         <Animated.View style={{transform: [{
           translateY: closeButtonOffset
         }]


         }}>
         <TouchableOpacity onPress={() => {
              
              //Scaling the View
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true
              })
              .start()
           
            Animated.timing(offsetValue, {
              // Your Random Value
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
            .start()
            Animated.timing(closeButtonOffset, {
              // Your Random Value
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
            .start()
          
          
            setShowMenu(!showMenu);
  
                          }}>
            
          
  
            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 35,
              marginLeft: 20,
              
           
            }}>
            </Image>
            
            
  
           </TouchableOpacity>
           
           <Text style ={{
              fontSize: 20,
              fontWeight: 'bold',
              color: "black",
              paddingTop: 20
            }}   
            >{currentTab}</Text>
            
              <Image source={photo} style ={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 20
              }}></Image>
              <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    paddingBottom: 5
              }}>Oxygen Advantage</Text>
              <Text style={{
                    fontSize: 18,
                    
              }}>Breathe Motherfucker</Text>
         </Animated.View>

       </Animated.View>
      
       </SafeAreaView>
  */
};

//For multiple Buttons



/*<Section title="See Your Changes">
<ReloadInstructions />
</Section>
<Section title="Debug">
  <DebugInstructions />
</Section>
<Section title="Learn More">
  Read the docs to discover what to do next:
</Section>
<LearnMoreLinks /> 

<Header />

 <SectionHeader title="YOUR TRAINING STARTS HERE">   </SectionHeader>
         
          <Image
             accessibilityRole="image"
             source={require('./warning.jpeg')}
             
                imageStyle={styles.logo}>
                 
           </Image>

           <Image
             accessibilityRole="image"
             source={require('./slide1.jpeg')}
             
                imageStyle={styles.logo}>
                 
           </Image>
           <Button 
           
            title = "I Understand"
            
            onPress = {() => Alert.alert('Accepted')}
            color = "#ff6347"
            
            
           >         
          

            </Button>
*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    
  },
  
  container: {
     
    flex: 1,
    
    

  },
  sectionTitle: {
    fontSize: 24,
    alignItems: "center", 
    fontWeight: '700',
    marginBottom: 20,
    
  },
  image: {
    flex: 1,
    alignContent: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logo: {
    opacity: 0.5,
    overflow: 'visible',
    
   /*
    * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
    *
    * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
    * source image's size.
    */
  
   
  
 },
});

export default App;
