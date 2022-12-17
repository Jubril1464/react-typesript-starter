import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import modules from './app-module'

const AppRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    {modules.map(module => (
                        <Route key={module.name} {...module.routeProps} />
                    ))}
                </Routes>
            </Router>
        </>
    )
}
export default AppRoute