import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { estudiantes } from './Store';
import './App.css';
// Vista Agregar: formulario que lee los valores al enviar (no controlado).
function Agregar() {
    function guardar(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        const form = evento.currentTarget;
        const nombre = (form.elements.namedItem('nombre') as
            HTMLInputElement).value.trim();
        const creditos = Number((form.elements.namedItem('creditos') as
            HTMLInputElement).value);
        // Validación antes de guardar.
        if (nombre === '') {
            alert('El nombre no puede estar vacío');
            return;
        }
        if (Number.isNaN(creditos) || creditos < 1 || creditos > 24) {
            alert('Los créditos deben estar entre 1 y 24');
            return;
        }
        estudiantes.push({ nombre, creditos });
        alert('Estudiante agregado. Ve a la lista para verlo.');
        form.reset();
    }
    return (
        <div>
            <h1>Agregar estudiante</h1>
            <form onSubmit={guardar}>
                <div className='campo'>
                    <label className='Titulo'>Nombre</label>
                    <input name="nombre" />
                </div>
                <div className='campo'>
                    <label className='Titulo'>Créditos</label>
                    <input name="creditos" type="number" />
                </div>
                <button type="submit" className="boton">Guardar</button>
                <Link className="boton gris" to="/">Cancelar</Link>
            </form>
        </div>
    );
}
export default Agregar;
