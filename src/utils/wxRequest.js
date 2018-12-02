import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'http://ckj.zm.zhi-meng.net/admin';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
const wxRequest=(params = {}, url)=>{
  tip.loading();
  let data = params.query.data || {};
  return new Promise((resolve, reject)=>{
    wepy.request({
      url: url,
      method: params.method || 'POST',
      data: data,
      header: {  'Content-Type': 'application/x-www-form-urlencoded' },
      success:(res)=>{
        resolve(res)
      },
      fail(res){
        reject(res)
      }
    });
  });
  tip.loaded();
};

// const wxRequest = async(params = {}, url) => {
//   tip.loading();
//   let data = params.query.data || {};
//
//   let res = await wepy.request({
//     url: url,
//     method: params.method || 'POST',
//     data: data,
//     header: {  'Content-Type': 'application/x-www-form-urlencoded' },
//     success:(res)=>{
//       return res
//     },
//     fail(res){
//       return res
//     },
//     complete:(res)=>{
//       return res;
//       console.log('res',res)
//     }
//   });
//   tip.loaded();
//
//   return res;
// };


module.exports = {
  wxRequest
}
