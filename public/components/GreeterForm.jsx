var React = require('react');

export class GreeterForm extends React.Component{
    onFormSubmit(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    };
};


