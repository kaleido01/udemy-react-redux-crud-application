//全reducersを一つのreducerに統合

import {combineReducers} from "redux"
import count from "./count"

export default combineReducers({count})
//export default conbineReducers({count,fop,bar})