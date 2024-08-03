function obtenerFechaHora(){
    const fechaActual = new Date();
    const diasSemana = ['Domingo','Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const mesesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre']
    const fecha = document.querySelector('#fecha')
    fecha.innerHTML = `${diasSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesesAño[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    const hora = document.querySelector('#hora');
    let horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
    const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';
    const ampmElemento = document.querySelector('#ampm');
    hora.innerHTML = `${horas} : ${minutos} : ${segundos}`;
    ampmElemento.innerHTML = `${ampm}`;


}

setInterval(obtenerFechaHora, 1000);


