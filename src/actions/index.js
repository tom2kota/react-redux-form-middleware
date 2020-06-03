import axios from "axios";
import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from "actions/types"

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('https://json-server-comment.herokuapp.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    console.log('changeAuth action isLoggedIn', isLoggedIn)
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}