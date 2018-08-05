const RESET_STATE = 'RESET_STATE';

/* const reset = obj => {
    if(!obj || obj==null) return;
    if (Object.prototype.toString.call(obj) === '[object Object]'){
        console.log(obj)
        for(let key in obj) reset(obj[key]);       
    }else{
        console.log(obj)
        obj = ''
    }
} */
export default {
    RESET_STATE(state){
        reset(state)
    }  
}   