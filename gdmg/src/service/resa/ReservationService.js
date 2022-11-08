import instance from "../apiService";
import { API_URL,GET_ALL_RESA_URL } from "../../utils/constantesutils";
const getAllResa = () => {
    return instance
    .get(API_URL+GET_ALL_RESA_URL)
    .then((response) => {
        //console.log(response.data.reservations);
        console.log(response);
        return response.data.reservations;
    })
}

const ResaService = {
    getAllResa
}

export default ResaService;