import {Link, Route, Routes} from "react-router-dom";
import {Characters} from "./pages/Characters/Characters";
import {Planets} from "./pages/Planets/Planets";
import {Starships} from "./pages/Starships/Starships";

function App() {
  return (
    <div>
      <ul>
        <li><Link to={'/'}>People</Link></li>
        <li><Link to={'/planets'}>Planets</Link></li>
        <li><Link to={'/starships'}>Starships</Link></li>
      </ul>

        <hr/>

        <Routes>
            <Route index element={<Characters/>}/>
            <Route path={'planets'} element={<Planets/>}/>
            <Route path={'starships'} element={<Starships/>}/>
        </Routes>

    </div>
  );
}

export default App;
