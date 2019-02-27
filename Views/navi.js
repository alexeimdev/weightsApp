import { createDrawerNavigator } from 'react-navigation';
import Mainpage from "./Mainpage";
import CalcPage from "./CalcPage";
import BuyShirts from "./BuyShirts";
import SavedLifts from "./SavedLifts";
import RoundsCounter from "./RoundsCounter";

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
    SavedLiftsRT: {
        screen: SavedLifts
    },
    RoundsCounterRT: {
        screen: RoundsCounter
    },

},
    {
        initialRouteName: 'HomeRT',
        drawerWidth:300,
        title:'Menu',
        contentOptions: {
            activeTintColor: '#e91e63',
            itemsContainerStyle: {
              marginVertical: 0,
            },
            iconContainerStyle: {
              opacity: 1
            }
          }

    },
    
);

export default MyRoutes;