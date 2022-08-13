import request from './request.js';

//企业入驻
export function addCompany(data) {
  return request('/external_qiyeadd', data, 'GET');
}

//工商注册
export function addBusiness(data) {
  return request('/qualifications_form', data, 'POST');
}

//金融服务
export function addFinance(data) {
  return request('/external_qiyerongziadd',{params: data}, 'GET');
}