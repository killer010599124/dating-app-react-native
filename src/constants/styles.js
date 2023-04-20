import { Colors } from "./";

const Header = {
  headerTintColor: Colors.primaryColor,
  headerStyle: {
    backgroundColor: "#FFF",
   
  },
  headerTitleStyle: {
    fontWeight: "800",
    color: Colors.textColor,
  },
};

const Tabs = {
  tabBarActiveTintColor: "#F35BAC",
  tabBarStyle: {
    backgroundColor: "white",
    // borderRadius : 40,
    width:'100%',
    height : '6%',
    alignSelf : 'center',
    paddingHorizental : 20,
    borderTopWidth: 0,
    shadowOpacity: 1,
    shadowRadius: 10,
    
  },
};

export default { Header, Tabs };
