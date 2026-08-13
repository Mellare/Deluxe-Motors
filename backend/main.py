from fastapi import FastAPI
from models import Veiculo

app = FastAPI()

@app.post("/cadastrar-veiculos")
async def create_vehicle(veiculo: Veiculo):
    return veiculo