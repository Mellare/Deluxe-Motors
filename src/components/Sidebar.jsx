import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from '../pages/Home';
import VehiclesForm from './VehiclesForm';

function Sidebar() {
    return (
        <BrowserRouter>
        <div className="relative">
            <div className="flex flex-col justify-start h-screen w-[200px] absolute -left-40 gap-10 bg-gray-100 hover:left-0 duration-1500">
                <h1 className="text-center font-bold text-4xl">Menu</h1>
                <div className="bg-blue-500 text-2xl p-[17px] rounded-2xl flex justify-between">
                    <Link to="/cadastro-veiculos">Veículos</Link>
                    <p className="text-2xl">&gt;</p>
                </div>
                <div className="bg-blue-500 text-2xl p-[17px] rounded-2xl flex justify-between">
                    <a href="#">Clientes</a>
                    <p className="text-2xl">&gt;</p>
                </div>
                <div className="bg-blue-500 text-2xl p-[17px] rounded-2xl flex justify-between">
                    <a href="#">Mecânica</a>
                    <p className="text-2xl">&gt;</p>
                </div>
                <div className="bg-blue-500 text-2xl p-[17px] rounded-2xl flex justify-between">
                    <a href="#">Dashboard</a>
                    <p className="text-2xl">&gt;</p>
                </div>
            </div>
        </div>

        <Routes>
            <Route path="cadastro-veiculos" element={<VehiclesForm />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Sidebar