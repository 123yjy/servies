import Vue from 'vue'
import App from './App'
import './static/iconfont/iconfont.css';
import * as utils from 'utils/utils.js';

Vue.prototype.$utils = utils;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
