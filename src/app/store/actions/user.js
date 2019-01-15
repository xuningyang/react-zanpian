import Ajax from '@/common/ajax'
import config from '@/utils/config'
import loadData from '@/utils/loadData'

// 储存accessToken到redux
export function saveAccessToken({ accessToken }) {
  return dispatch => {
    dispatch({ type: 'SAVE_ACCESS_TOKEN', accessToken })
  }
}

export function saveUserInfo({ userinfo }) {
  return dispatch => {
    dispatch({ type: 'SAVE_USERINFO', userinfo })
  }
}

export function loadUserInfo({ uid }) {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      let [err, data] = await Ajax({
        url: config.api.getuserinfo,
        method: 'get',
        data: {
          uid
        }
      })

      if (err) {
        resolve([err])
      } else {
        dispatch({ type: 'GET_USER_INFO', data: data })
        resolve([null, data])
      }
    })
  }
}

export function signIn({ username, password }) {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      // 这里写你的登录请求，登录成功以后，将token储存到cookie，使用httpOnly(比较安全)
      // your code ...
      let [err, data] = await Ajax({
        url: config.api.login,
        method: 'post',
        data: {
          username,
          password,
          isJson: true
        }
      })

      if (data.rcode === 1) {
        dispatch({ type: 'SAVE_USERINFO', userinfo: data.data })
        resolve([null, data.data])

        // 储存 cookie
        ;[err, data] = await Ajax({
          url: window.location.origin + '/sign/in',
          method: 'post',
          data: {
            auth_sign: data.data.auth,
            userinfo: data.data
          }
        })

        if (data && data.success) {
          resolve([null, true])
        } else {
          resolve(['sign error'])
        }
      } else {
        resolve([data.msg])
      }
    })
  }
}

export function signOut() {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      let [err, data] = await Ajax({
        url: window.location.origin + '/sign/out',
        method: 'post'
      })

      if (data && data.success) {
        resolve([null, true])
      } else {
        resolve(['sign error'])
      }
    })
  }
}