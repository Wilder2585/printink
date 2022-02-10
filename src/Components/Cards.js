
const Cards = (props) => {
    return (
        
        <div class="card col-4 m-auto  " >
                <a href={props.linkImagen} style={{height: "151px"}} id="cardhover"><img src={props.imagen} alt="tintas" className="mt-3" style={{ width: "100%", height: "151px"}}/></a>
                    <div class="card-body">
                        <h5 class="card-title pt-3" style={{height: "80px"}} >{props.Nombre}</h5>
                        <p class="card-text pb-3"  style={{height: "80px"}}>{props.Enunciado}</p>
                       
                    </div>
                   
        </div>
    )
}

export default Cards;