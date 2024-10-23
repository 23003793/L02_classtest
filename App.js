import React from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';


// Exercise 1

// const Movie = ({ title, year }) => {
//   return (
//       <View>
//         <Text>{title} {year}</Text>
//       </View>
//   );
// };
//
// const App = () => {
//   return (
//       <View>
//         <Movie title="Avengers End Game" year="2019" />
//       </View>
//   );
// };

//Exercise 2

// import Icon from "react-native-vector-icons/AntDesign";
//
// const Movie = ({ title, year, icon_name }) => {
//   return (
//       <View>
//         <Text>{title} {year}</Text>
//         <Icon name={icon_name} size={20} color="black" />
//       </View>
//   );
// };
//
// const App = () => {
//   return (
//       <View>
//           <StatusBar hidden={true}/>
//         <Movie title="Avengers End Game" year="2019" icon_name="rocket1" />
//       </View>
//   );
// };

//Exercise 3
// const Movie = ({ title, year }) => {
//     return (
//         <View>
//             <Text>
//                 {title} ({year})
//             </Text>
//             <Image
//                 source={require('./img/doctor-sleep.jpg')}
//                 style={{ width: 400, height: 500 }}
//             />
//         </View>
//     );
// };
//
// const App = () => {
//     return (
//         <View>
//             <StatusBar hidden={true} />
//             <Movie title="Doctor Sleep" year="2019" />
//         </View>
//     );
// };

//Exercise 4

// const Movie = ({ title, year, poster }) => {
//   return (
//       <View>
//         <Text>{title} {year}</Text>
//       <Image
//           source={require('./img/doctor-sleep.jpg')}
//           style={{width:400,height:500}}
//           />
//       </View>
//
//   );
// };
//
// const App = () => {
//   return (
//       <View>
//         <Movie title="Doctor Sleep" year="2019" poster={require('./img/doctor-sleep.jpg')} />
//       </View>
//   );
// };

//Exercise 5 & 6

// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const Movie = ({ title, year, icon_name, poster }) => {
//   return (
//       <View>
//           <Image
//               source={require('./img/doctor-sleep.jpg')}
//               style={{width:400,height:500}}
//           />
//         <Text>{title} {year}</Text>
//         <Icon name={icon_name} size={20} color="black" />
//           <Image
//               source={require('./img/midway.jpg')}
//               style={{width:400,height:500}}
//           />
//       </View>
//   );
// };
//
// const App = () => {
//     return (
//         <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
//             <StatusBar hidden={true} />
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 icon_name="skull"
//                 poster={require('./img/doctor-sleep.jpg')}
//             />
//         </ScrollView>
//     );
// };
//
// export default App;


