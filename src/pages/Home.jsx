import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import apiServices from "../services/apiServices.js";



export const Home = () => {


	useEffect(() => {
	// Aquí puedes llamar a las funciones de apiServices para cargar datos
	// const fetchData = async () => {	apiServices.getPeople()
	// 		.then(data => console.log('People data:', data))
	// 		.catch(error => console.error('Error fetching people:', error));
	// }

	apiServices.getPeople();
	console.log("People data:", apiServices.getPeople());
	
}, []);

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="home container">
				<header className="home__header">
					<h1>Star Wars Database</h1>
					<div className="home__alert">Error de carga…</div>
				</header>

				{/* <!-- PEOPLE --> */}
				<section className="block">
					<div className="block__title">
						<h2>Personajes</h2>
						<span className="tag">Cargando…</span>
					</div>
					<div className="cards">
						<article className="card">
							<div className="card__body">
								<h3 className="card__title">Nombre</h3>
								<p className="card__meta">Dato 1</p>
								<p className="card__meta">Dato 2</p>
							</div>
							<div className="card__actions">
								<a className="btn btn--ghost" href="#">Detalles</a>
								<button type="button" className="btn">★</button>
							</div>
						</article>
						
					</div>
				</section>

				{/* <!-- PLANETS --> */}
				<section className="block">
					<div className="block__title">
						<h2>Planetas</h2>
					</div>
					<div className="cards">
						<article className="card">
							<div className="card__body">
								<h3 className="card__title">Nombre</h3>
								<p className="card__meta">Dato 1</p>
								<p className="card__meta">Dato 2</p>
							</div>
							<div className="card__actions">
								<a className="btn btn--ghost" href="#">Detalles</a>
								<button type="button" className="btn">★</button>
							</div>
						</article>
					</div>
				</section>

				{/* <!-- VEHICLES --> */}
				<section className="block">
					<div className="block__title">
						<h2>Vehículos</h2>
					</div>
					<div className="cards">
						<article className="card">
							<div className="card__body">
								<h3 className="card__title">Nombre</h3>
								<p className="card__meta">Dato 1</p>
								<p className="card__meta">Dato 2</p>
							</div>
							<div className="card__actions">
								<a className="btn btn--ghost" href="#">Detalles</a>
								<button type="button" className="btn">★</button>
							</div>
						</article>

					</div>
				</section>
			</div>

		</div>
	);
}; 