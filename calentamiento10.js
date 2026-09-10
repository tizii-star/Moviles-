function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado){
    return !esInvitado && (edad >= 18 || tienePermisoDocente)

}
console.log(evaluarAccesoApp(19, false, false))