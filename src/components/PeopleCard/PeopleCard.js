

export function PeopleCard({people, next}) {
    console.log(people);


    function nextPeople (){
        next(prevState => prevState + 1);
    }

    return (
        <div>
            <button onClick={()=>nextPeople()}>Next</button>
            <h3>{people.name}</h3>
            <ul>
                <li>Gender: {people.gender}</li>
                <li>Birth year: {people.birth_year}</li>
                <li>Eye color: {people.eye_color}</li>
            </ul>
        </div>
    );
}
