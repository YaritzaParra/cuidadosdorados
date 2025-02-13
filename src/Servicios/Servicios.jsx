import React from "react";
import './Servicios.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


export function Servicios() {
    return (
        <>
            <div className="row">
                <div className="col col-md-4">
                    <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/acompa%C3%B1amiento.jpg?alt=media&token=439c6103-e1ae-4f5e-95d3-c27c22caa9b4" alt="Acompañamiento"/>
                    <div className="texto">
                        <h3>Acompañamiento a Citas y Trámites</h3>
                        <p> Si por razones laborales no puedes acompañar a tu ser querido en sus diligencias, uno de nuestros colaboradores estará para acompañarlos</p>
                    </div>
                </div>
                <div className="col col-md-4">
                    <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/cuidado_personal.jfif?alt=media&token=5b1e181e-f618-4944-aaee-b257cb69a048" alt="Cuidado personal"/>
                    <div className="texto">
                        <h3>Cuidado Personal</h3>
                        <p> La persona encargada de ti, te brindara un aseo personal debido a tus necesidades, logrando en ti una comodidad y seguridad ante este servicio.</p>
                    </div>
                </div>
                <div className="col col-md-4">
                    <img className="imagen" src="https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/ejercicios_aerobicos.webp?alt=media&token=cc6e0db5-c6a3-478e-9194-19efba5fc581" alt="Ejercicios aerobicos"/>
                    <div className="texto">
                        <h3>Ejercicios Aerobicos</h3>
                        <p>Las personas mayores usualmente requieren alternativas para mantener su salud, por ello en el centro de cuidados dorados brindamos el servicio para realizar actividades físicas, las cuales se realizan al aire libre para brindar un espacio agradable a nuestros clientes</p>
                    </div>
                </div>
            </div>
        </>
    )
}