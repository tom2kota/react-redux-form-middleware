// HOC component helps to avoid repeated logic
import React, {Component} from "react";
import {connect} from "react-redux";

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.navigateRestriction()
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.navigateRestriction()
        }

        navigateRestriction = () => (!this.props.auth) ? this.props.history.push('/') : null

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => ({auth: state.auth})

    return connect(mapStateToProps)(ComposedComponent)
}