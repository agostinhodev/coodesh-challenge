import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const AppTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
    return (
        <AppTab.Navigator initialRouteName="Home">
            <AppTab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: tabInfo => {
                        return <AntDesign name="home" size={20} />;
                    },
                }}
            />
        </AppTab.Navigator>
    );
};

export default AppRoutes;
