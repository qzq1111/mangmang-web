import axios from 'axios'

/*
登陆接口
@data { phone, pass_word}
*/
export const loginAPW = (params) => {
    return axios.request({
        url: `/api/v1/user/loginAPW`,
        method: 'post',
        data: params
    })
}
/*
获取用户信息
@params { key}
*/
export const userInfo = (params) => {
    return axios.request({
        url: `/api/v1/user/userInfo`,
        method: 'get',
        params: params
    })
};
/*
修改用户信息
@data { user_id,name,email,sex,birthday,address,position,introduction }
*/
export const changeUserInfo = (params) => {
    return axios.request({
        url: `/api/v1/user/changeUserInfo`,
        method: 'put',
        data: params
    })
}
/*
获取用户名片列表
@params {key,user_id}
*/
export const getBusinessCardList = (params) => {
    return axios.request({
        url: `/api/v1/user/businessCard`,
        method: 'GET',
        params: params
    })
}
/*
获取项目列表

*/
export const getProjectList = (params) => {
    return axios.request({
        url: `/api/v1/project`,
        method: 'GET',
        params: params
    })
}

/*
获取任务列表
@params {project_id}
*/
export const getTaskList = (params) => {
    return axios.request({
        url: `/api/v1/task`,
        method: 'GET',
        params: params
    })
}

/*
获取父级任务列表
@params {project_id}
*/
export const getFatherTask = (params) => {
    return axios.request({
        url: `/api/v1/fatherTask`,
        method: 'GET',
        params: params
    })
}
/*
获取项目相关人员
@params {project_id}
*/
export const getProjectUser = (params) => {
    return axios.request({
        url: `/api/v1/projectUser`,
        method: 'GET',
        params: params
    })
}

/*
创建任务
@data {father_task_id,project_id,user_id,task_name,task_priority,task_type,task_status,task_content,start_time,end_time}
*/

export const createTask = (params) => {
    return axios.request({
        url: `/api/v1/task`,
        method: 'POST',
        data: params
    })
}
/*
删除任务
*/
export const deleteTask = (params) => {
    return axios.request({
        url: `/api/v1/task/${params}`,
        method: 'DELETE',
        // params: params
    })
}