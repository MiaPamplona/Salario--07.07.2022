let nombre;
let cantidad = 0;
let salario = 0;
let extra = 0;
let total = 0;

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    cantidad = Number(document.getElementById('cantidad').value)

    ValidarDatos(nombre, cantidad)
}

function ValidarDatos(nombre, cantidad) {
    if (isNaN(nombre) == false || isNaN(cantidad) == true || (nombre.length = 0) || (cantidad.length > 0)) {
        swal("¡ERROR!", "Te falta un dato", "error");
    }
    else {
        swal("¡Felicidades!", "Datos Completos", "success");
        Operacion(cantidad)
    }
   
}

function Operacion(cantidad) {
    if (cantidad > 0 && cantidad <= 40) {
        salario = (cantidad * 8000)
        extra = 0
        total = salario
    }
    else if (cantidad > 40) {
        extra = ((cantidad - 40) * 12000)
        salario = 40 * 8000
        total = extra + salario
    }

    document.getElementById('salario').value = salario
    document.getElementById('salarioextra').value = extra
    document.getElementById('total').value = total

    guardarLocalStorage(nombre, cantidad)
}

function guardarLocalStorage(nombre, cantidad) {
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Cantidad', cantidad);
    ListarDatos()
}

function ListarDatos() {
    let nombreusu = localStorage.getItem('Nombre')
    let CantidadHoras = localStorage.getItem('Cantidad')
}