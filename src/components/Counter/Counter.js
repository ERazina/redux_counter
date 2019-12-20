import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement, reset} from '../../actions/actions';

function Counter (props) {

    function add () {
        props.increment()
    };

    function del() {
        props.decrement();
    }

    function toZero () {
        props.reset();
    }


        return (
            <div className="Counter">
                <div>initial value: {props.count}</div>
                <button 
                onClick={add}
                >increment</button>
                <button onClick={del}>decrement</button>
                <button onClick={toZero}>reset</button>
            </div>
          );
        }

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }   
}

export default connect(mapStateToProps, {increment, decrement, reset})(Counter);
