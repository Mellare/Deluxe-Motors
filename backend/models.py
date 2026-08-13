from pydantic import BaseModel

class Veiculo(BaseModel):
    marca: str
    modelo: str
    ano_fabricacao: int
    ano_modelo: int
    cor: str
    placa: str | None = None