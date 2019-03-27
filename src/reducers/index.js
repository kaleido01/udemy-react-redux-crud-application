//全reducersを一つのreducerに統合

import {combineReducers} from "redux"
import events from "./events"

export default combineReducers({events})
//export default conbineReducers({count,fop,bar})