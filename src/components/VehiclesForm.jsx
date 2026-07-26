function VehiclesForm() {
    return (
        <>
            <h1 className="text-6xl text-center font-bold">Cadastro de Veículos</h1>
            <div className="bg-gray-200 flex justify-center rounded-4xl">
                <form>
                    <div className=" flex flex-col w-[600px] gap-[30px] p-[50px]">
                        <label className="text-2xl" for="brand">Marca:</label>
                        <input type="text" className="h-[40px] rounded-2xl bg-white shadow-xl/10"></input>
                        <label className="text-2xl" for="model">Modelo:</label>
                        <input type="text" className=" h-[40px] rounded-2xl bg-white shadow-xl/10"></input>
                        <label className="text-2xl" for="year">Ano:</label>
                        <input type="date" className="h-[40px] rounded-2xl bg-white shadow-xl/10"></input>
                        <label className="text-2xl" for="color">Cor:</label>
                        <input type="text" className="h-[40px] rounded-2xl bg-white shadow-xl/10"></input>
                        <label className="text-2xl" for="register">Placa:</label>
                        <input type="text" className="h-[40px] rounded-2xl bg-white shadow-xl/10"></input>
                    </div>
                </form>
            </div>
            <div className="flex flex-row-reverse gap-[20px] p-[30px]">
                <button className="bg-emerald-500 h-[50px] w-[100px] rounded-2xl font-semibold hover:bg-emerald-600 cursor-pointer">Enviar</button>
                <button className="bg-blue-400 h-[50px] w-[100px] rounded-2xl font-semibold hover:bg-blue-500 cursor-pointer">Limpar Campos</button>
                <button className="bg-red-400 h-[50px] w-[100px] rounded-2xl font-semibold hover:bg-red-500 cursor-pointer">Voltar</button>
            </div>
        </>
    )
}

export default VehiclesForm;