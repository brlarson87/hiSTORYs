import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { findHorizontalMargin } from '../util/helpers';



import LandingScreen from '../screens/LandingScreen';
import Explore from '../screens/Explore';
import Favorites from '../screens/Favorites';
import ContinentScreen from '../screens/ContinentScreen';
import CountryScreen from '../screens/CountryScreen';
import TimePeriodScreen from '../screens/TimePeriodScreen';
import StoryPickScreen from '../screens/StoryPickScreen';
import FullStory from '../screens/FullStory';



const windowWidth = Dimensions.get('window').width;


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;
                let color = focused ? Colors.primary_gold : Colors.off_white
                switch(route.name) {
                    case 'Landing Screen':
                        iconName = 'home';
                        break;
                    case 'Explore':
                        iconName = 'search1';
                        break;
                    case 'Favorites':
                        iconName = 'staro'
                        break;        
                }
                return <AntDesign name={iconName} size={26} color={color}/>
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarItemStyle: {
                backgroundColor: Colors.primary_green,
                width: 40,
                height: 60,
                borderRadius: 60,
                marginHorizontal: findHorizontalMargin(windowWidth, 40, 3),
            },
            tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: Colors.off_white,
                height: 90
            }
        })}
      >
        <Tab.Screen name="Landing Screen" component={LandingScreen} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    );
  }

const NavigationHub = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.off_white,
            },
            headerShadowVisible: false,
            headerTintColor: Colors.secondary_gold,
            headerTitleStyle: {
                color: Colors.off_white
            },
            headerBackTitle: 'Back'
        }}
      >
        <Stack.Screen name="Home" component={MyTabs}/>
        <Stack.Screen name="Continent" component={ContinentScreen} />
        <Stack.Screen name="Country Pick" component={CountryScreen} />
        <Stack.Screen name="Time Period" component={TimePeriodScreen} />
        <Stack.Screen name="Story Pick" component={StoryPickScreen} />
        <Stack.Screen name="Full Story" component={FullStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationHub;
