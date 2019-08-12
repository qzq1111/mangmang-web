import axios from 'axios'

export const loginAPW = (params) => {
    return axios.request({
        url: `/api/v1/user/loginAPW`,
        method: 'post',
        data: params
    })
};

export const userInfo = (params) => {
    return axios.request({
        url: `/api/v1/user/userInfo`,
        method: 'get',
        params: params
    })
};

export const changeUserInfo = (params) => {
    return axios.request({
        url: `/api/v1/user/changeUserInfo`,
        method: 'put',
        data: params
    })
}

