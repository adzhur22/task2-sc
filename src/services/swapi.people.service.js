import {swapiAxiosService} from "./swapi.axios.service";
import {urls} from "../urls/urls";

const swapiPeopleService = {
    getPeople: (id = 1) => swapiAxiosService.get(urls.peoples + '/' + id)
}

export {swapiPeopleService}