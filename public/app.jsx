const React = require ('react')
const ReactDOM = require ('react-dom')
import {Greeter} from './components/Greeter';

var firstName = 'Andrew';
ReactDOM.render(

	<Greeter name={firstName}/>,
	document.getElementById('app')

); 