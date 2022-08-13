export const baseUrl = 'http://zhimao-test.hnyipeng.cn';
export default function request(url='', data={}, method='GET',header={}){
  uni.showLoading({
    title:'加载中...'
  })
  return new Promise((resolve, reject) => {
    uni.request({
      url:baseUrl+'/api'+url,
      data,
      method,
      header: {
        'content-type': 'application/json'
      },
      success({data}) {
        uni.hideLoading();
        if(data.status == 1){
          resolve(data.data);
        }else{
          uni.showToast({
            title: '获取数据失败！',
            icon:'none'
          })
        }
      },
      fail(err) {
        uni.hideLoading();
        uni.showToast({
          title: '请求失败！',
          icon:'none'
        })
        reject(err);
      }
    })
  });
}