import React from 'react';



let reducer=(state={name:'abu',age:30,score:70},action)=>{
    switch(action.type){
        case 'CHANGE_NAME':{
            return {...state,name:action.payload}
            break;
        }
        case 'CHANGE_AGE':{
            return {...state,age:action.payload}
            break;
        }
        case 'CHANGE_SCORE':{
            return {...state,score:action.payload}
            break;
        }
        default:{
            return state;
        }
    }
}


export default reducer;