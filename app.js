

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
var numEdit = 0
var elementEditando = null

addEventListener("load", function Start(){
    Mostrar(2)
    //citas.push(new cita("1","1","2000","00:00","nombre","apellidos","612-12-12-12","2000-12-12", "12345678Y", ""))
    //console.log(citas)
    document.getElementById("btnGuardarEditada").style.display = "none"


})

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

function crearCita(dia,mes,año,hora,nombre,apellidos,telefono,dni,fechaNacimiento,observaciones,manual){
    document.getElementById("vacioRow").style.display = "none"
    if(manual == false){
        citas[id] = new cita(dia,mes,año,hora,nombre,apellidos,telefono, dni,fechaNacimiento,observaciones)
        id++
    }else{
        citas[numEdit] = new cita(dia,mes,año,hora,nombre,apellidos,telefono, dni,fechaNacimiento,observaciones)
        console.log("Guarda en: " + numEdit)
        elementEditando.parentElement.parentElement.remove()

    }
    
    

    var node = document.createElement("tr");
    const idtr = document.createAttribute("id");
    idtr.value = id;
    node.setAttributeNode(idtr);

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

    var modNode = document.createElement("td")

    var img1 = document.createElement("img")
    var ruta1node =  document.createAttribute("src")
    ruta1node.value = "delete.png"
    img1.setAttributeNode(ruta1node)
    var img2 = document.createElement("img")
    var ruta2node =  document.createAttribute("src")
    ruta2node.value = "edit.png"
    img2.setAttributeNode(ruta2node)
    const clase1 = document.createAttribute("class");
    clase1.value = "icon";
    const clase2 = document.createAttribute("class");
    clase2.value = "icon";
    img1.setAttributeNode(clase1);
    img2.setAttributeNode(clase2);
    const onclick1 = document.createAttribute("onclick");
    onclick1.value = "DeleteCita(this)";
    const onclick2 = document.createAttribute("onclick");
    onclick2.value = "EditCita(this)";
    const claseCol = document.createAttribute("class")
    claseCol.value = "modCol"

    img1.setAttributeNode(onclick1);
    img2.setAttributeNode(onclick2);
    modNode.appendChild(img1)
    modNode.appendChild(img2)
    modNode.setAttributeNode(claseCol)

    node.appendChild(modNode)

    document.getElementById("tablaCitas").childNodes[1].childNodes[1].appendChild(node)
}


function Validation(manual){
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

    if(valido && manual == false){
        Mostrar(2)
        crearCita(dia,mes,año,hora,nombre,apellidos,telefono,dni,fechaNacimiento,observaciones,false)
    }
    else if(valido && manual){
        crearCita(dia,mes,año,hora,nombre,apellidos,telefono,dni,fechaNacimiento,observaciones,true)
       
    }
}


function MostrarMod(){
    if(document.getElementById("modBtn").innerHTML == "<p>Modificar Citas</p>"){
        i = 0
        while(document.getElementsByClassName("modCol")[i] != null){
            document.getElementsByClassName("modCol")[i].style.display = "block"
            i++
        document.getElementById("modBtn").innerHTML = "<p>Hecho</p>"
    }
    }else {
        i = 0
        while(document.getElementsByClassName("modCol")[i] != null){
            document.getElementsByClassName("modCol")[i].style.display = "none"
            i++
        }
        document.getElementById("modBtn").innerHTML = "<p>Modificar Citas</p>"
    }
    document.getElementById("nuevaCitaContent").style.display = "none"
        document.getElementById("btnNueva").style.display = "flex"
}

function DeleteCita(element){
    element.parentElement.parentElement.remove()
    id--
}

function EditCita(element){

    var all = document.getElementsByTagName('tr');
    for (var i = 0, o; (o = all[i]) != null; i++) {
        if (o.id == element.parentElement.parentElement.id) {
            console.log(i-2)
            num=i-2
        }
    }
    elementEditando = element
    
    if(document.getElementById("nuevaCitaContent").style.display == "flex"){
        document.getElementById("nuevaCitaContent").style.display = "none"
        document.getElementById("btnNueva").style.display = "flex"
        document.getElementById("btnGuardarEditada").style.display = "none"


    }else{
        console.log(citas[num])

        document.getElementById("diaValor").value = citas[num].dia
        document.getElementById("mesValor").value = citas[num].mes
        document.getElementById("añoValor").value = citas[num].año
        document.getElementById("horaValor").value = citas[num].hora
        document.getElementById("nombreValor").value = citas[num].nombre
        document.getElementById("apellidosValor").value = citas[num].apellidos
        document.getElementById("telefonoValor").value = citas[num].telefono
        document.getElementById("dniValor").value = citas[num].fechaNacimiento
        document.getElementById("fechaValor").value = citas[num].dni
        document.getElementById("observacionesValor").value = citas[num].observaciones
    
        document.getElementById("nuevaCitaContent").style.display = "flex"
        document.getElementById("btnNueva").style.display = "none"
        document.getElementById("btnGuardarEditada").style.display = "flex"
    }
    numEdit = num
}