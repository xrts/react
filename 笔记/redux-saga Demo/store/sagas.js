import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType';
import axios from 'axios';
import { initListAction } from './actionCreators';

function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action =  initListAction(res.data);
        yield put(action);
    } catch(e) {
        console.log(e);
    }
}

function* mySage() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySage;