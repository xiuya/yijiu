const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOGOUT = 'LOGOUT';
const sendCode_err = 'sendCode_err';
const sendCode_success = 'sendCode_success';
const SET_FORGET_PWD_SUCCESS = 'SET_FORGET_PWD_SUCCESS';
const SET_PERSON_false='SET_PERSON_false';
const SET_PERSON_true='SET_PERSON_true';

const initState = {
    phone: '',
    head_pic: '',
    redirectTo: '',
    real_name: '',
    status: '',
    ctime: '',
    msg: '',
    sendCodeErr: false,
    saller:false,
}
const user = {
    state: initState,
    mutations: {
        LOGIN_SUCCESS(state, { result, msg }) {
            //console.log(result);
            localStorage.setItem('Token', result.Token);
            localStorage.setItem('userInfo', JSON.stringify(result));
            state.redirectTo = '/collectMoney';
            state.msg = msg + (new Date()).valueOf();
        },
        ERROR_MSG(state, { msg }) {
            state.msg = msg + (new Date()).valueOf();
        },
        sendCode_err(state, { msg }) {
            state.msg = msg + (new Date()).valueOf();
            state.sendCodeErr = true;
        },
        sendCode_success(state, { msg }) {
            state.msg = msg + (new Date()).valueOf();
            state.sendCodeErr = false;
        },
        LOGOUT(state) { //清除state状态, 清除token
            let kefu = localStorage.getItem('kefu');
            localStorage.clear();
            localStorage.setItem('kefu', kefu);
            for (var key in state) {
                state[key] = ''
            }
        },
        SET_FORGET_PWD_SUCCESS(state, { msg }) {
            state.msg = msg + (new Date()).valueOf();
            state.redirectTo = '/my/setUp';
        },
        SET_PERSON_false(state,{msg}){
            console.log(msg,state,'resultfalse')
            state.saller=false;
            state.redirectTo = '/cart';
        },
        SET_PERSON_true(state,{msg}){
            console.log(msg,state,'resulttrue')
            state.saller=true;
            state.redirectTo = '/goods';
        }
    },
    actions: {
        login({ commit }, payload) {
            // this.$http.post('/api/api/login', "data=" + JSON.stringify(payload))
            //     .then(res => {
            //         switch (res.data.code) {
            //             case 1: //成功
            //                 commit(LOGIN_SUCCESS, res.data)
            //                 break;
            //             default: //失败
            //                 commit(ERROR_MSG, { msg: res.data.msg })
            //                 break;
            //         }
            //     })
        },
        person({commit},payload){
            console.log(payload,'pay')

            switch (payload.seller) {
                case true: //成功
                    commit(SET_PERSON_true,true)
                    break;
                default: //失败
                    commit(SET_PERSON_false,false )
                    break;
            }
            // commit(SET_PERSON,payload)
        },
        logout({ commit }) {
            commit(LOGOUT)
        },
        sendcode({ commit }, payload) {
            this.$http.post('/api/api/sendSms', "data=" + JSON.stringify(payload))
                .then(res => {
                    switch (res.data.code) {
                        case 1:
                            commit(sendCode_success, res.data)
                            break;
                        default:
                            commit(sendCode_err, { msg: res.data.msg })
                            break;
                    }
                })
        },
        set_forget_pwd({ commit }, { phone, smsCode, login_pwd, check_pwd }) {
            this.$http.post('/api/api/loginPwd', "data=" + JSON.stringify({ phone, smsCode, login_pwd, check_pwd }))
                .then(res => {
                    switch (res.data.code) {
                        case 1: //成功
                            commit(SET_FORGET_PWD_SUCCESS, res.data)
                            break;
                        default: //失败
                            commit(ERROR_MSG, { msg: res.data.msg })
                            break;
                    }
                })
        }
    }
}


export default user