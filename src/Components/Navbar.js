
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-1">
  <div class="container-fluid">
    <Link to='/'><img src="imagenes/transparent.png"  width="200"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-end">
        <li class="nav-item">
          <Link class="nav-link active" to="">Inicio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Tintas">Productos</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>


    )

}


export default Navbar;