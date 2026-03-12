import APIClient from './instance';

const END_POINTS = {
    GET_USERS : '/users'
}

export const getUsersData = (params) => {
    console.log('PARAMS, ', params)
    return APIClient
    .get(END_POINTS.GET_USERS, { params })
    .then(res => res.data)
}