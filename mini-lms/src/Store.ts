// Estado compartido simple del Mini-LMS.
// En la Semana 13 (Hooks) manejaremos el estado de forma reactiva con useState.
export interface Estudiante {
    nombre: string;
    creditos: number;
}
export const estudiantes: Estudiante[] = [
    { nombre: 'María Torres', creditos: 18 },
    { nombre: 'Luis Pérez', creditos: 8 },
    { nombre: 'Ana Ruiz', creditos: 14 }
];
// Misma regla de matrícula de la Unidad 1.
export function estado(creditos: number): string {
    if (creditos < 1 || creditos > 24) {
        return 'Créditos inválidos';
    } else if (creditos >= 12) {
        return 'Matriculado';
    }
    return 'Pendiente';
}
