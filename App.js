import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
    case "MainHomeStack":
      return "ios-home";
    case "SearchStack":
      return "ios-bookmarks";
    case "MessageStack":
      return "ios-chatbubbles";
    case "ProfileStack":
      return "ios-person";
    case "NotificationStack":
      return "ios-notifications";
  }
}
const Tab = createBottomTabNavigator();
const StartStack = createNativeStackNavigator();
const MainHomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function StartStackScreen() {
  return (
    <StartStack.Navigator
     
    >
      
      <MainStack.Screen name="Splash" component={Splash} />

      <MainStack.Screen name="Request" component={Request} options={{}} />
      <MainStack.Screen name="Broadcast" component={Broadcast} options={{}} />
      <MainStack.Screen name="SendingPhoto" component={SendingPhoto} options={{}} />
      <MainStack.Screen name="AddBestPhoto" component={AddBestPhoto} />
      <MainStack.Screen name="EnterPhone" component={EnterPhone} />
      <MainStack.Screen name="CreatePassword" component={CreatePassword} />
      <MainStack.Screen name="SignUp" component={SignUp} />

      <MainStack.Screen name="VerifyCode" component={VerifyCode} />
      <MainStack.Screen name="SignIn" component={SignIn} />
      <MainStack.Screen name="Introduction" component={HomeCarousel} />
    </StartStack.Navigator>
  );
}
function SearchStackScreen() {
  return (
    <SearchStack.Navigator
     
    >
      
      <SearchStack.Screen name="MakeOffer" component={MakeOffer} options={{}} />
      <SearchStack.Screen name="Services" component={Services} options={{}} />
      <SearchStack.Screen name="SearchResults" component={SearchResults} options={{}} />
      
      <MainStack.Screen name="OfferDetails" component={OfferDetails} options={{}} />
    </SearchStack.Navigator>
  );
}
function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator
     
    >

      <NotificationStack.Screen name="Notification" component={Notification} options={{}} />

    </NotificationStack.Navigator>
  );
}
function MessageStackScreen() {
  return (
    <MessageStack.Navigator
     
    >
      <MessageStack.Screen name="Messages" component={Messages} options={{}} />
      <MessageStack.Screen name="ChatField" component={ChatField} options={{}} />
    </MessageStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
     
    >
      <ProfileStack.Screen name="User" component={User} options={{}} />
      <ProfileStack.Screen name="Membership" component={Membership} options={{}} />
      <ProfileStack.Screen name="RoyalGold" component={RoyalGold} options={{}} />
      <ProfileStack.Screen name="Offer" component={Offer} options={{}} />
      <ProfileStack.Screen name="Settings" component={Settings} options={{}} />
      <ProfileStack.Screen name="EditIntro" component={EditIntro} options={{}} />
      <ProfileStack.Screen name="Preferences" component={Preferences} options={{}} />
      <ProfileStack.Screen name="Queen" component={Queen} options={{}} />
    </ProfileStack.Navigator>
  );
}
function MainHomeStackScreen() {
  return (
    <MainHomeStack.Navigator
     
    >
      <MainHomeStack.Screen name="MainHome" component={MainHome} options={{}} />
      <MainHomeStack.Screen name="Request" component={Request} options={{}} />

    </MainHomeStack.Navigator>
  );
}
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
        headerShown: false
        
      })}
    >


      {/**/}


      <Tab.Screen name="MainHomeStack" component={MainHomeStackScreen} options={{}} />
      <Tab.Screen name="SearchStack" component={SearchStackScreen} options={{}} />
      <Tab.Screen name="NotificationStack" component={NotificationStackScreen} options={{}} />
      <Tab.Screen name="MessageStack" component={MessageStackScreen} options={{}} />
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} options={{}} />

      {/*  */}
      {/* <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} /> */}
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
    
    </MainStack.Navigator>
  );
}

const AppStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Group>
          <AppStack.Screen name="Start" component={StartStackScreen} />
        </AppStack.Group>
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
