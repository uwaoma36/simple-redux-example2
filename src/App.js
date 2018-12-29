import React,{Component} from 'react';
import UserDetails  from './components/Views/userDetail';
import UpdateForm from './components/Views/updateForm';

class App extends Component{
 
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <UserDetails/><hr/>
                <UpdateForm/>
            </div>
        );
    }
}

export default App;