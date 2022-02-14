import * as React from "react";
import {useNavigate} from "react-router-dom";
import api from "./services/api/api";
import "./styles/App.css";
import Routers from "./routes/Routers";

function App() {

    const history = useNavigate();
    api.subscribe(history);

    return (
        <div>
            <Routers/>
        </div>
    );
}

export default App;
