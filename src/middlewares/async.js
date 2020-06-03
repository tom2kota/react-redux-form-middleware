// MIDDLEWARE - checks:
// 1) action has a Promise on its payload property
// 2) wait for resolve Promise &:
// 3.1) send action to the NEXT middleware
// 3.2) gets its data, dispatch new action with data

export default ({dispatch}) => next => action => {
    (!action.payload || !action.payload.then) ? next(action) : action.payload.then((response) => {
        const newAction = {...action, payload: response};
        dispatch(newAction);
    })
}