import axios from "axios";
import { Loading, Message } from "element-ui";
const options = {
    fullscreen: true,
    background: "rgba(0,0,0,0.1)"
};
let loadCount = 0; // 记录当前请求数，目的显示隐藏loading
// loading 实例
let loadingInstance;
// api 配置
const config = {
    baseURL: process.env.VUE_APP_API,
    timeout: 60000,
    headers: {}
    // withCredentials: true // Check cross-site Access-Control
};
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (_config) {
      _config.baseURL = process.env.VUE_APP_API;
      const token = localStorage.getItem('access-token')
      if (token) {
        _config.headers['x-access-token'] = token;
      }
      if (loadCount++ === 0) {
        loadingInstance = Loading.service(options);
      }
      return _config;
    },
    function (error) {
      --loadCount <= 0 && loadingInstance && loadingInstance.close();
      return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        --loadCount <= 0 && loadingInstance && loadingInstance.close();
        return response.data;
    },
    function (error) {
      --loadCount <= 0 && loadingInstance && loadingInstance.close();
      const { response } = error;
      loadingInstance && loadingInstance.close();
      Message({
        showClose: true,
        type: "error",
        duration: 2000,
        message: response.data.message
      });
      return Promise.reject(error.response.data);
    }
);

export default _axios;