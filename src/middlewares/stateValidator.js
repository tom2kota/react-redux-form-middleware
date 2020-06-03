import tv4 from "tv4";
import stateSchema from "middlewares/stateSchema";

export default ({dispatch, getState}) => next => action => {
    next(action);

    (!tv4.validate(getState(), stateSchema)) ? console.warn('Invalid state schema detected!') :
        console.log('tv4.validate state: ', tv4.validate(getState(), stateSchema))
}