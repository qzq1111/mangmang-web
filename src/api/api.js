import axios from 'axios'

export const loginAPW = (params) => {
    return axios.request({
        url: `/api/v1/user/loginAPW`,
        method: 'post',
        data: params
    })
};
