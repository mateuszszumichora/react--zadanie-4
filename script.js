var CounterNumber = 0;
var Counter = React.createClass({
    
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    zero: function() {
        this.setState({
            counter: 0
        });
    },
    
    //zycie komponentu
    
    componentWillUpdate: function() {
        console.log('Update component')
    },

    componentDidUpdate: function() {
        console.log('Updated!');
    },

    componentWillUnmount: function(){
        console.log('You click delete counter. Component will unmount');
    },
    
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
                React.createElement('button',{onClick: this.increment}, 'dodaj'),
                React.createElement('button',{onClick: this.decrement}, 'odejmij'),
                React.createElement('button', {onClick: this.zero},"zeruj")
        );
    }
});











var element = React.createElement('div', {},
    React.createElement(Counter,{
    id: CounterNumber++ 
}),
    React.createElement(Counter, {id: CounterNumber++}),
);


ReactDOM.render(element, document.getElementById('app'));