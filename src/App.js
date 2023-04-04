import react from "react";
import  ReactDOM  from "react-dom/client";


const App=()=>{
    return(
        <>
            <h1 className="font-bold text-xl">YouTube Clone</h1>
        </>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)