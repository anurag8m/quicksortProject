import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'
class Newfile extends Component {
    constructor(props) {
        super(props);

    }
    render() {


        return (
            <footer className="container-fluid bg-4 text-center">
                Anurag{this.props.age}
            </footer>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}
export default connect(mapStateToProps)(Newfile);


