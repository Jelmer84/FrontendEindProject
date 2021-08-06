import axios from "axios";

export const BASE_URL = 'http://localhost:8080/'
const API_URL = BASE_URL+'api/'


// function axiosX){
//     axios.interceptors.request
// }



axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers['Content-Type'] = 'application/json'
    return config
})


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

async function getAdminTotal(eventId, studentPartyId){
    return axios.get(`${API_URL}inventory/admin-total/${eventId}/${studentPartyId}`)
}

export {
   
    fetchEventInventory,
    postEventInventory,
    approveEventInventory,
    fetchSupervisorSummary,
    getAdminTotal
}