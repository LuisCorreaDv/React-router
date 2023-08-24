//Libreria para hacer peticiones HTTP

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    //data es una llave donde axios guarda los datos de la url
    setData(respuesta.data)
}
