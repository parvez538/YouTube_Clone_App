import react from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Store from "./Utils/Store";
import { Provider } from "react-redux";


const App=()=>{
    return(
       <Provider store={Store}>
        <Header />
        <Body />
       </Provider>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)