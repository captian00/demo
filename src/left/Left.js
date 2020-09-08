import React ,{ Component} from 'react';
import MenuLeft from './MenuLeft';
import Subcriptions from './Subcriptions';
class Left extends Component {
    render() {
        return(
            <div>
                <MenuLeft/>
                <Subcriptions/>
            </div>
        )
    }
}
export default Left;