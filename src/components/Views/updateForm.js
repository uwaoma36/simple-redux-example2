import React,{Component} from 'react';
import {cahngeUserScore,changeUserName,changeUserAge} from '../actions/usersA';
import {connect} from 'react-redux';
class UpdateForm extends Component{
    constructor(props){
            super(props);
            this.updateAge=this.updateAge.bind(this);
            this.updateName=this.updateName.bind(this);
            this.updateScore=this.updateScore.bind(this);
    }

    updateName(e){
        let val=e.target.value;
        this.props.dispatch(changeUserName(val));
    }

    updateAge(e){
        let val=e.target.value;
        this.props.dispatch(changeUserAge(val))
    }

    updateScore(e){
        let val=e.target.value;
        this.props.dispatch(cahngeUserScore(val))
    }


    render(){
        return(
            <form action="">
                <label htmlFor="name">Name</label><input name='name' type="text" onChange={this.updateName} defaultValue={this.props.name}/><br/>
                <label htmlFor="age">Age</label><input name='age' type="text" onChange={this.updateAge} defaultValue={this.props.age}/><br/>
                <label htmlFor="score">Score</label><input name='score' type="text" onChange={this.updateScore} defaultValue={this.props.score}/><br/>
            </form>
        );
    }
}
const data=(store)=>{
    return store;
}

export default connect(data)(UpdateForm);