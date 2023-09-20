from typing import Union

from fastapi import FastAPI
from models import Calculo
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()



origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)



def operacion(calculo: Calculo):
    resultado = 0

    if calculo.operacion == "suma":
        resultado = calculo.numero1 + calculo.numero2

    return resultado




@app.post("/")
def read_root(calculo: Calculo):
    # hasta aca


    resultado = operacion(calculo)
    return {"resultado": resultado}