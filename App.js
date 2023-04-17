import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Styles } from "./src/constants";

import Explore from "./src/screens/Explore";
import Profile from "./src/screens/Profile";
import Splash from "./src/screens/Splash";
import HomeCarousel from "./src/screens/Introduction";
import UserProfile from "./src/screens/UserProfile";
import SignIn from "./src/screens/Login";
import Chat from "./src/screens/Chat";
import VerifyCode from "./src/screens/VerifyCode";
import SignUp from "./src/screens/SignUp";
import CreatePassword from "./src/screens/CreatePassword";
import EnterPhone from "./src/screens/EnterPhone";
import AddBestPhoto from "./src/screens/AddBestPhoto";
import SendingPhoto from "./src/screens/SendingPhoto";
import Broadcast from "./src/screens/Boradcast";
import MainHome from "./src/screens/Home/Main";
import Request from "./src/screens/Home/Request";
import MakeOffer from "./src/screens/MakeOffer";
import SearchResults from "./src/screens/SearchResult";
import Services from "./src/screens/Services";
import OfferDetails from "./src/screens/OfferDetails";
import Notification from "./src/screens/Notifications";
import Messages from "./src/screens/Messages";
import ChatField from "./src/screens/ChatField";
import User from "./src/screens/User";
import RoyalGold from "./src/screens/RoyalGold";
import Settings from "./src/screens/Settings";
import EditIntro from "./src/screens/EditIntro";
import Preferences from "./src/screens/Preferences";
import Queen from "./src/screens/Queen";
import Offer from "./src/screens/Offer";
import Membership from "./src/screens/Membership";


function getTabIcon(routeName) {
  switch (routeName) {
    case "Explore":
      return "ios-beer";
    case "Messages":
      return "ios-chatbubbles";
    case "Profile":
      return "ios-person";
  }
}

const Tab = createNativeStackNavigator();
function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={(options) => ({
        ...Styles.Header,
        ...Styles.Tabs,
        tabBarIcon: ({ color }) => (
          <Ionicons
            name={getTabIcon(options.route.name)}
            size={32}
            color={color}
            style={{ marginTop: 2 }}
          />
        ),
      })}
    >
     

    <Tab.Screen name="Splash" component={Splash} />
    
    <Tab.Screen name="Membership" component={Membership} options={{}} />
    <Tab.Screen name="OfferDetails" component={OfferDetails} options={{}} />
    <Tab.Screen name="RoyalGold" component={RoyalGold} options={{}} />
    <Tab.Screen name="Offer" component={Offer} options={{}} />
    <Tab.Screen name="Settings" component={Settings} options={{}} />
    <Tab.Screen name="EditIntro" component={EditIntro} options={{}} />
    <Tab.Screen name="Preferences" component={Preferences} options={{}} />
      <Tab.Screen name="Queen" component={Queen} options={{}} />
     
      <Tab.Screen name="User" component={User} options={{}} />
      <Tab.Screen name="ChatField" component={ChatField} options={{}} />
      <Tab.Screen name="Messages" component={Messages} options={{}} />
      <Tab.Screen name="Notification" component={Notification} options={{}} />
      <Tab.Screen name="Services" component={Services} options={{}} />
      <Tab.Screen name="SearchResults" component={SearchResults} options={{}} />
      <Tab.Screen name="MakeOffer" component={MakeOffer} options={{}} />
      <Tab.Screen name="Request" component={Request} options={{}} />
      <Tab.Screen name="MainHome" component={MainHome} options={{}} />
      <Tab.Screen name="Broadcast" component={Broadcast} options={{}} />
      <Tab.Screen name="SendingPhoto" component={SendingPhoto} options={{}} />
      <Tab.Screen name="AddBestPhoto" component={AddBestPhoto} />
      <Tab.Screen name="EnterPhone" component={EnterPhone} />
      <Tab.Screen name="CreatePassword" component={CreatePassword} />
      <Tab.Screen name="SignUp" component={SignUp} />

      <Tab.Screen name="VerifyCode" component={VerifyCode} />
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="Introduction" component={HomeCarousel} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const MainStack = createNativeStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        ...Styles.Header,
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={HomeTabScreen} />
      <MainStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: true }}
      />
    </MainStack.Navigator>
  );
}

const AppStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Group>
          <AppStack.Screen name="Main" component={MainStackScreen} />
        </AppStack.Group>
        <AppStack.Group screenOptions={{ presentation: "modal" }}>
          <AppStack.Screen name="UserProfile" component={UserProfile} />
        </AppStack.Group>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
