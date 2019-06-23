const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const promiseAPI = (api, params) => {
  var obj = Object.assign({}, params);
  return new Promise((resolve, reject) => {
    obj.success = (res) => {
        resolve(res);
      },
      obj.fail = (msg) => {
        reject(msg);
      }
    api(obj);
  })
}

var _phoneInfo = null;
const getPhoneInfo = () => {
  if (_phoneInfo) return Promise.resolve(_phoneInfo);
  return promiseAPI(wx.getSystemInfo).then(res => {
    _phoneInfo = {
      statusBarHeight: res.statusBarHeight,
      isIphoneX:res.model.indexOf("iPhone X") != -1 ? true : false,
      menuRect:wx.getMenuButtonBoundingClientRect()
    }
    return _phoneInfo;
  })
}

module.exports = {
  formatTime,
  getPhoneInfo
}