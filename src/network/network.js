import axios from "axios";

export const BASE_URL = 'http://localhost:8080/'
const API_URL = BASE_URL+'api/'

async function loginUser(data){
    return axios.post(`${API_URL}auth/signin`, data)
}

async function registerUser(data){
    return axios.post(`${API_URL}auth/signup`, data)
}

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    console.log(config)
    return config
})

async function fetchUser(email) {
    return axios.get(`${API_URL}users/${email}`)
}

async function registerCustomer(data){
    return axios.post(`${API_URL}customer/create`, data)
}

async function fetchCustomers(){
    return axios.get(`${API_URL}customer/all`)
}

async function fetchCustomer(id){
    return axios.get(`${API_URL}customer/id/${id}`)
}

async function registerCar(data){
    return axios.post(`${API_URL}car/create/${data.customer}`, data)
}

async function uploadPdf(PdfData){
    return  axios.post(`${API_URL}carpapers/add`, PdfData);
}

async function registerItem(data){
    return axios.post(`${API_URL}item/create`, data)
}

async function fetchItems(){
    return axios.get(`${API_URL}item/all`)
}

async function registerService(data){
    return axios.post(`${API_URL}service/create`, data)
}

async function fetchServices(){
    return axios.get(`${API_URL}service/all`)
}

async function registerRepair(customer, data){
    return axios.post(`${API_URL}repair/create/${customer}`, data)
}

async function fetchRepairs(customerId) {
    return axios.get(`${API_URL}repair/all/${customerId}`)
}

async function updateStatuses(data){
    return axios.put(`${API_URL}car/update/statuses`, data)
}

async function fetchInspectedPayed(){
    return axios.get(`${API_URL}car/carpage`)
}

async function fetchInspectionPlannedAwaitingRepair(){
    return axios.get(`${API_URL}car/repairpage`)
}

async function fetchRepairedCanceledInvoiced(){
    return axios.get(`${API_URL}car/paymentpage`)
}

async function deleteItem(id){
    return axios.delete(`${API_URL}item/delete/${id}`)
}

async function deleteService(id){
    return axios.delete(`${API_URL}service/delete/${id}`)
}

async function deleteCustomer(id){
    return axios.delete(`${API_URL}customer/delete/${id}`)
}
export {
    loginUser,
    registerUser,
    registerCustomer,
    registerCar,
    registerItem,
    registerService,
    fetchCustomers,
    uploadPdf,
    registerRepair,
    fetchItems,
    fetchServices,
    fetchCustomer,
    updateStatuses,
    fetchInspectedPayed,
    fetchInspectionPlannedAwaitingRepair,
    fetchRepairedCanceledInvoiced,
    fetchUser,
    deleteItem,
    deleteService,
    deleteCustomer,
    fetchRepairs
};

