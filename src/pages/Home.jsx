import Title from '../components/Title';
import Sidebar from '../components/Sidebar';

function Home() {
    const pages = [
        { title: "Cadastro de Veículos", link: "/cadastro-de-veiculos" },
        { title: "Clientes", link: "/cadastro-de-clientes" },
        { title: "Mecânica", link: "/mecanica" },
        { title: "Dashboard", link: "/dashboard" }
    ];
    return (
        <>
            <Title />
            <Sidebar pages={pages} />
        </>
    )
}

export default Home;