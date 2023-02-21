import axios from "axios";
import {baseUrlSwapiService} from "../urls/urls";

const swapiAxiosService = axios.create({
    baseURL:baseUrlSwapiService
});

export {swapiAxiosService}