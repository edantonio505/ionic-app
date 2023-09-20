from pydantic import BaseModel


class Calculo(BaseModel):
    numero1: int
    numero2: int
    operacion: str


