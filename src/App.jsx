import { Route, Routes } from "react-router-dom";
import AllDoctors from "./components/Main_page/AllDoctors";
import Details from "./components/Details_page/Details";

function App() {
    return (
        <div className="text-right text-slate-900 bg-blue-200 w-full h-full py-24">
            <div className="sm:w-96 w-5/6 mx-auto">
                <Routes>
                    <Route path="/" element={<AllDoctors />} />
                    <Route path="/details/:email" element={<Details />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
