import axios from "axios";

export const BASE_URL = 'http://localhost:8080/'
const API_URL = BASE_URL+'api/'


// function axiosX){
//     axios.interceptors.request
// }

async function loginUser(data){
    return axios.post(`${API_URL}auth/signin`, data)
}

async function registerUser(data){
    return axios.post(`${API_URL}auth/signup`, data)
}


axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers['Content-Type'] = 'application/json'
    return config
})

async function fetchUser(email) {
    return axios.get(`${API_URL}users/${email}`)
}

function fetchEventInventory(studentID, stage){
    return axios.get(`${API_URL}inventory/${studentID}/${stage}`)
}

function postEventInventory(eventDetails){
    return axios.post(`${API_URL}inventory/submit`, eventDetails)
}

function approveEventInventory(data){
    return axios.put(`${API_URL}inventory/approve`, data)
}

async function fetchSupervisorSummary(supervisorId){
    return axios.get(`${API_URL}inventory/supervisor-summary/${supervisorId}`)
}

async function deleteAllInventory(){
    return axios.delete(`${API_URL}inventory`)
}

async function getAdminTotal(eventId, studentPartyId){
    return axios.get(`${API_URL}admin/inventory/totals/${eventId}/${studentPartyId}`)
}

async function getAdminOverview(eventId, studentPartyId, stage){
    return axios.get(`${API_URL}admin/inventory/overview/${eventId}/${studentPartyId}/${stage}`)
}

async function uploadImage(imageData){
    return  axios.post(`${API_URL}image`, imageData);
}

async function getImage(userid){
    return axios.get(`${API_URL}image/${userid}`);
}

export {
    loginUser,
    registerUser,
    fetchUser,
    fetchEventInventory,
    postEventInventory,
    approveEventInventory,
    fetchSupervisorSummary,
    getAdminTotal,
    getAdminOverview,
    deleteAllInventory,
    uploadImage,
    getImage
}