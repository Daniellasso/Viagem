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
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Message" component={Message} />
                <Tab.Screen name="Like" component={Like} />
                <Tab.Screen name="Search" component={Search} options={
                    () => <AntDesign name="home" size={24} color="black" />
                } />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
