import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';




class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreValues(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult =>(
                        <li key={strResult.id} onClick={() => this.props.onDeleteValues(strResult.id)}>{strResult.value}</li>
                    ))}
                   
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        storedResults: state.res.results

    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubCounter: () => dispatch(actionCreators.sub(5)),
        onStoreValues: (result) => dispatch(actionCreators.storeValue(result)),
        onDeleteValues: (id) => dispatch(actionCreators.deleteValue(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);