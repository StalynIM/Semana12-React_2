import type { FormEvent } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { estudiantes } from './Store';
import './App.css';

// Vista Modificar: lee los valores actuales y permite actualizarlos.
function Modificar() {
    // Obtenemos el índice del estudiante desde la URL (ej: /modificar/1)
    const { id } = useParams();
    const navigate = useNavigate();

    const index = Number(id);
    const estudiante = estudiantes[index];

    function guardar(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        const form = evento.currentTarget;
        const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value.trim();
        const creditos = Number((form.elements.namedItem('creditos') as HTMLInputElement).value);

        // Validación antes de guardar.
        if (nombre === '') {
            alert('El nombre no puede estar vacío');
            return;
        }
        if (Number.isNaN(creditos) || creditos < 1 || creditos > 24) {
            alert('Los créditos deben estar entre 1 y 24');
            return;
        }

        // Modificamos el objeto directamente en el array del Store
        estudiantes[index] = { nombre, creditos };
        
        alert('Estudiante modificado correctamente.');
        navigate('/'); // Redirige a la lista
    }

    // Si el índice no existe (ej: /modificar/999), evitamos que la app se rompa
    if (!estudiante) {
        return (
            <div>
                <h2>Estudiante no encontrado</h2>
                <Link className="boton gris" to="/">Volver a la lista</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Modificar estudiante</h1>
            <form onSubmit={guardar}>
                <div className="campo">
                    <label>Nombre</label>
                    {/* Usamos defaultValue para que el input inicie con el dato actual */}
                    <input name="nombre" defaultValue={estudiante.nombre} />
                </div>
                <div className="campo">
                    <label>Créditos</label>
                    <input name="creditos" type="number" defaultValue={estudiante.creditos} />
                </div>
                <button type="submit" className="boton">Actualizar</button>
                <Link className="boton gris" to="/">Cancelar</Link>
            </form>
        </div>
    );
}

export default Modificar;