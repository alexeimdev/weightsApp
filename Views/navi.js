import { createDrawerNavigator } from 'react-navigation';
import Mainpage from "./Mainpage";
import CalcPage from "./CalcPage";

// const MyRoutes = createStackNavigator({
//         HomeRT: {
//             screen: Mainpage
//         },
//         CalcPageRT: {
//             screen: CalcPage
//         },
//     },
//     {
//         initialRouteName: 'HomeRT'
//     }
// );

const MyRoutes = createDrawerNavigator({
    HomeRT: {
        screen: Mainpage
    },
    BuyShirtsRT: {
        screen: BuyShirts
    },
    SavedLifts: {
        screen: BuyShirts
    },

},
    {
        initialRouteName: 'HomeRT',
        drawerWidth:300
    }
);

export default MyRoutes;