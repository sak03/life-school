import { createStore} from 'redux'
// import reducers from "../redux/reducers/index";
import rootReducer from './rootReducer'

const store = createStore(rootReducer)
export default store;
