import { StackNavigator } from 'react-navigation';
import Mainpage from "./Mainpage";
import CalcPage from "./CalcPage";

const MyRoutes = StackNavigator({
        HomeRT: {
            screen: Mainpage
        },
        CalcPageRT: {
            screen: CalcPage
        },
    },
    {
        initialRouteName: 'HomeRT'
    }
);

export default MyRoutes;