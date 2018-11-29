import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://ckj.zm.zhi-meng.net'
// const apiMall = 'http://localhost:8080/'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
//换取sessionKey
const getDiscoverList = (params) => wxRequest(params, apiMall + '/wxapp/Login/getsessionkey');
console.log(getDiscoverList)

//商品接口---begin
//首页发现商品接口



export default {
  getDiscoverList,
}
