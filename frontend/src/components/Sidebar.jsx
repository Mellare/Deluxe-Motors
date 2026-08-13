import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import VehiclesForm from './VehiclesForm';

function Sidebar(props) {
    return (
        <BrowserRouter>
            <div className="relative">
                <div className="flex flex-col justify-start h-screen w-[200px] absolute -left-40 gap-10 bg-gray-100 hover:left-0 duration-1500">
                    <h1 className="text-center font-bold text-4xl">Menu</h1>
                    {props.pages.map(t => <div className="bg-blue-500 text-2xl p-[17px] rounded-2xl flex justify-between">
                        <Link to={t.link}>{t.title}</Link>
                    </div>)}
                </div>
            </div>
            <Routes>
                <Route path="cadastro-de-veiculos" element={<VehiclesForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Sidebar;