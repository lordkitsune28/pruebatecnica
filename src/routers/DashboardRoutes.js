import {
    Routes, Route
} from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Recibo } from '../components/Recibo';
import { Risoto } from '../components/Risoto';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Risoto />} />
                
                    <Route path="/recibo" element={<Recibo />} />
                </Routes>
            </div>

        </>
    )
}