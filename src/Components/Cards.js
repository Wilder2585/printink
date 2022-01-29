import { Link } from "react-router-dom";

const Cards = (props) => {
    return (
        <div class="card col-5 mt-4 m-3">
                <img src="https://insumosesmar.com/wp-content/uploads/2019/12/IMPREION-LITOGRAFICA.jpg" alt="tintas"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.Nombre}</h5>
                        <p class="card-text">{props.Enunciado}</p>
                        <Link to='/Productos' class="btn btn-primary ">Go somewhere</Link>
                    </div>
        </div>
    )
}

export default Cards;