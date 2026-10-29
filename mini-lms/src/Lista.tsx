import { Link } from 'react-router-dom';
import { estudiantes, estado } from './Store';
import './App.css';
// Vista Lista: muestra la tabla con .map() (Semana 11).
function Lista() {
    return (
        <div>
            <h1 className='Titulo'>Lista de estudiantes</h1>
            <Link className="boton" to="/agregar">Agregar estudiante</Link>
            <table className="tabla">
                <thead>
                    <tr className='Principal'>
                        <th>Nombre</th>
                        <th>Créditos</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map((e, i) => (
                        <tr key={i}>
                            <td>{e.nombre}</td>
                            <td>{e.creditos}</td>
                            <td>
                                <span
                                    className={
                                        estado(e.creditos) === 'Matriculado' ? 'badge ok' : 'badgepend'}
                                >
                                    {estado(e.creditos)}
                                </span>
                            </td>
                            <td>
                                <Link className="boton" to={`/modificar/${i}`}>Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
export default Lista;