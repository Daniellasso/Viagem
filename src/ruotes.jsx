import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Home from './pages/Home/Home';
import Message from './pages/Message/Message';
import Like from './pages/Like/Like';
import Search from './pages/Search/Search';

const Tab = createBottomTabNavigator();

export default function ruotes() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ title: ' '}}>
                <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({size, color}) => 
                    <AntDesign name="home" size={size} color={color} />
                    }}
                />
                <Tab.Screen 
                name="Message" 
                component={Message} 
                options={{
                    tabBarIcon: ({size, color}) => 
                    <AntDesign name="message1" size={size} color={color} />
                    }}
                />
                <Tab.Screen 
                name="Like" 
                component={Like} 
                options={{
                    tabBarIcon: ({size, color}) => 
                    <AntDesign name="hearto" size={size} color={color} />
                    }}
                />
                <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarIcon: ({size, color}) => 
                    <AntDesign name="home" size={size} color={color} />
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
