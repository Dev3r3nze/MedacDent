addEventListener("load", function Start(){
    Mostrar(2)
})

function Mostrar(n){
    switch(n){
        case 1:
            if(document.getElementById("btnNueva").style.display == "flex"){
                document.getElementById("btnNueva").style.display = "none"
                document.getElementById("nuevaCitaContent").style.display = "flex"
                document.getElementById("btnGuardar").style.display = "flex"
            } else  document.getElementById("btnNueva").style.display = "flex"
            break

        case 2:
            if(document.getElementById("nuevaCitaContent").style.display == "none"){
                document.getElementById("nuevaCitaContent").style.display = "flex"
                document.getElementById("btnGuardar").style.display = "flex"
            } else {
                
                document.getElementById("nuevaCitaContent").style.display = "none"
                document.getElementById("btnGuardar").style.display = "none"
                document.getElementById("btnNueva").style.display = "flex"
            }
            break
    }
}

var citas = []
var id = 0

function cita(dia,mes,año,hora,nombre,apellidos,telefono,fechaNacimiento,dni,observaciones){
    this.dia = dia
    this.mes = mes
    this.año = año
    this.hora = hora
    this.nombre = nombre
    this.apellidos = apellidos
    this.telefono = telefono
    this.fechaNacimiento = fechaNacimiento
    this.dni = dni
    this.observaciones = observaciones
}

function crearCita(dia,mes,año,hora,nombre,apellidos,telefono,dni,fechaNacimiento,observaciones){
    document.getElementById("vacioRow").style.display = "none"
    citas[id] = new cita(dia,mes,año,hora,nombre,apellidos,telefono, dni,fechaNacimiento,observaciones)
    console.log(citas)
    id++

    var node = document.createElement("tr");

    var diaNode = document.createElement("td")
    var diaNodeText = document.createTextNode(dia)
    diaNode.appendChild(diaNodeText)
    node.appendChild(diaNode)

    var mesNode = document.createElement("td")
    var mesNodeText = document.createTextNode(mes)
    mesNode.appendChild(mesNodeText)
    node.appendChild(mesNode)

    var añoNode = document.createElement("td")
    var añoNodeText = document.createTextNode(año)
    añoNode.appendChild(añoNodeText)
    node.appendChild(añoNode)

    var horaNode = document.createElement("td")
    var horaNodeText = document.createTextNode(hora)
    horaNode.appendChild(horaNodeText)
    node.appendChild(horaNode)

    var nombreNode = document.createElement("td")
    var nombreNodeText = document.createTextNode(nombre)
    nombreNode.appendChild(nombreNodeText)
    node.appendChild(nombreNode)

    var apellidosNode = document.createElement("td")
    var apellidosNodeText = document.createTextNode(apellidos)
    apellidosNode.appendChild(apellidosNodeText)
    node.appendChild(apellidosNode)

    var telefonoNode = document.createElement("td")
    var telefonoNodeText = document.createTextNode(telefono)
    telefonoNode.appendChild(telefonoNodeText)
    node.appendChild(telefonoNode)

    var dniNode = document.createElement("td")
    var dniNodeText = document.createTextNode(dni)
    dniNode.appendChild(dniNodeText)
    node.appendChild(dniNode)

    var fechaNacimientoNode = document.createElement("td")
    var fechaNacimientoNodeText = document.createTextNode(fechaNacimiento)
    fechaNacimientoNode.appendChild(fechaNacimientoNodeText)
    node.appendChild(fechaNacimientoNode)
    

    var observacionesNode = document.createElement("td")
    var observacionesNodeText = document.createTextNode(observaciones)
    observacionesNode.appendChild(observacionesNodeText)
    node.appendChild(observacionesNode)

    document.getElementById("tablaCitas").childNodes[1].childNodes[1].appendChild(node)
}

function Validation(){
    var valido = true
    dia = document.getElementById("diaValor").value
    mes = document.getElementById("mesValor").value
    año = document.getElementById("añoValor").value
    hora = document.getElementById("horaValor").value
    nombre = document.getElementById("nombreValor").value
    apellidos = document.getElementById("apellidosValor").value
    telefono = document.getElementById("telefonoValor").value
    dni = document.getElementById("dniValor").value
    fechaNacimiento = document.getElementById("fechaValor").value
    observaciones = document.getElementById("observacionesValor").value
    
    dia = Number.parseInt(dia)
    if(dia > 31 || dia <= 0 || isNaN(dia)) {
        valido = false
        document.getElementById("errDia").style.display="block"
    } else document.getElementById("errDia").style.display = "none"

    mes = Number.parseInt(mes)
    if(mes > 12 || mes <= 0 || isNaN(mes)) {
        valido = false
        document.getElementById("errMes").style.display="block"
    } else document.getElementById("errMes").style.display = "none"


    año = Number.parseInt(año)
    if(año > 2150 || año <= 2021 || isNaN(año)) {
        valido = false
        document.getElementById("errAño").style.display="block"
    } else document.getElementById("errAño").style.display = "none"

    horaArr = hora.split(":")
    horaChars = hora.split("")
    
    if(Number.parseInt(horaArr[0])>24 || Number.parseInt(horaArr[1])>59 || horaChars.length != 5 || hora == null) {
        valido = false
        document.getElementById("errHora").style.display="block"
    } else document.getElementById("errHora").style.display = "none"

    if(Number.isInteger(Number.parseInt(nombre.split("").sort()[0])) || nombre == ""){
        valido = false
        document.getElementById("errNombre").style.display="block"
    } else document.getElementById("errNombre").style.display = "none"

    if(Number.isInteger(Number.parseInt(apellidos.split("").sort()[0])) || apellidos == ""){
        valido = false
        document.getElementById("errApellido").style.display="block"
    } else document.getElementById("errApellido").style.display = "none"

    const phoneRegex = /[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/
    if(phoneRegex.test(telefono)==false || telefono == null){
        valido = false
        document.getElementById("errTelefono").style.display="block"
    } else document.getElementById("errTelefono").style.display = "none"

    const dniRegex = /[0-9]{8}[A-Z]{1}$/
    if(dniRegex.test(dni)==false || dni == null){
        valido = false
        document.getElementById("errDNI").style.display="block"
    } else document.getElementById("errDNI").style.display = "none"

    const fechaRegex = /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/
    if(fechaRegex.test(fechaNacimiento)==false || dni == null){
        valido = false
        document.getElementById("errFecha").style.display="block"
    } else document.getElementById("errFecha").style.display = "none"

    if(valido){
        Mostrar(2)
        crearCita(dia,mes,año,hora,nombre,apellidos,telefono,dni,fechaNacimiento,observaciones)
    }
    console.log(nombre)
}
