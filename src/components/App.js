import React, {Component} from "react";
import {Link, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {changeAuth} from "actions";

class App extends Component {
    renderButton = () => !this.props.auth ? <span className="item" onClick={() => this.props.changeAuth(true)}><i
            className="sign-in blue icon"/>SIGN IN</span> :
        <span className="item" onClick={() => this.props.changeAuth(false)}><i className="sign-out blue icon"/>SIGN OUT</span>

    renderMenu() {
        return (
            <div className="ui compact vertical labeled icon menu">
                <Link to="/" className="item">
                    <i className="cloud download blue icon"/>
                    POSTS
                </Link>
                <Link to="/post" className="item">
                    <i className="cloud upload blue icon"/>
                    ADD POST
                </Link>
                <Link to="/post" className="item">
                    {this.renderButton()}
                </Link>
                <a className="item"
                   href="https://youtu.be/PnRxuUqYKws?t=35"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <i className="video play blue icon"/>
                    VIDEOS
                </a>
            </div>
        )
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header center aligned blue" style={{paddingTop: '20px'}}>
                    React Redux Posts with Middleware</h1>
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="middle aligned row">
                            <BrowserRouter>
                                <Route path="/post" component={CommentBox}/>
                                <Route path="/" exact component={CommentList}/>
                                {this.renderMenu()}
                            </BrowserRouter>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, {changeAuth})(App)