
import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
//Libreria de React Dom
//seNavigate ayuda a navegar a una ruta en especifico 
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

const Post = ({ url }) => {

    const [post, setPost] = useState({})

    const { id } = useParams()

    const navigate = useNavigate()

    //useEffect se usa para poder comunciarse con un servidor
    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
        //Se ejecuta cada que cambia el id
    },/*Callback*/ [id, navigate])

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post