var React = require('react');
import {GreeterMessageComponent} from './GreeterMessage';
import {GreeterForm} from './GreeterForm';

export class Greeter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            message: this.props.message
        };
        this.handleNewData=this.handleNewData.bind(this);
    }

    static get defaultProps() {
        return {
            name: 'React',
            message: 'This is the default message!'
        }
    }

    handleNewData(updates) {
        this.setState(updates);
    }

    render () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessageComponent name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
};