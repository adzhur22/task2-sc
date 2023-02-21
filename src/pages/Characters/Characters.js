import {PeopleCard} from "../../components/PeopleCard/PeopleCard";
import {useEffect, useState} from "react";
import {swapiPeopleService} from "../../services/swapi.people.service";

export function Characters() {

    let [id, setId] = useState(1);
    let [people, setPeople] = useState(null);

    useEffect(()=>{
        swapiPeopleService.getPeople(id).then(({data})=>{
            setPeople(data);
        })
    },[id])


    return (
        <div>
            {people && <PeopleCard people={people} next={setId}/>}
        </div>
    );
}
