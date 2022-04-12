import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={( <h1>Hello World</h1> )} />
            </Routes>
        </BrowserRouter>
    );
}


export default AppRoutes;