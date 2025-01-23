class Alumno {
    nombre;
    apellido1;
    apellido2;
    fechaNacimiento;
    curso;
    modulosMatriculados;
    nombreCompleto;
    edad;
    matriculado;

    /**
     * Constructor de la clase alumno
     * @param nombre
     * @param apellido1
     * @param apellido2
     * @param fechaNacimiento
     * @param curso
     * @param modulosMatriculados
     * @param nombreCompleto
     * @param edad
     * @param matriculado
     */
    constructor(nombre, apellido1, apellido2, fechaNacimiento, curso, modulosMatriculados, nombreCompleto, edad, matriculado) {
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._fechaNacimiento = fechaNacimiento;
        this._curso = curso;
        this._modulosMatriculados = modulosMatriculados;
        this._nombreCompleto = nombreCompleto;
        this._edad = edad;
        this._matriculado = matriculado;
    }

    // Métodos getter y setter de la clase Alumno
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellido1() {
        return this._apellido1;
    }

    set apellido1(value) {
        this._apellido1 = value;
    }

    get apellido2() {
        return this._apellido2;
    }

    set apellido2(value) {
        this._apellido2 = value;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(value) {
        this._fechaNacimiento = value;
    }

    get curso() {
        return this._curso;
    }

    set curso(value) {
        this._curso = value;
    }

    get modulosMatriculados() {
        return this._modulosMatriculados;
    }

    set modulosMatriculados(value) {
        this._modulosMatriculados = value;
    }

    get nombreCompleto() {
        return this._nombreCompleto;
    }

    set nombreCompleto(value) {
        this._nombreCompleto = value;
    }

    get edad() {
        return this._edad;
    }

    set edad(value) {
        this._edad = value;
    }

    get matriculado() {
        return this._matriculado;
    }

    set matriculado(value) {
        this._matriculado = value;
    }
}