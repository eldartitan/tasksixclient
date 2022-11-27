import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
    const { logUser } = useSelector((state) => state.user);
    return <>{!logUser ? <Login /> : <Main />}</>;
}

export default App;
