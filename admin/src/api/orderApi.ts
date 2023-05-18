import axiosConfig from "./axiosConfig";


const orderApi = {
    getAllOrder: () => axiosConfig.get('/orders')
}

export default orderApi;