import React from 'react';
import {createStore} from 'redux';
import reducer from '../reducers/usersR';

const initState={name:'abu',age:30,score:70};
const store=createStore(reducer,initState);


export default store;