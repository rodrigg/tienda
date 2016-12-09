/**
 * Created by Curso on 29/11/2016.
 */
$.noConflict();
var dnies=["4571880G"];
var nombres=new Array()
nombres["4571880G"]="Imanol";

var apellidos=new Array();
 apellidos["4571880G"]="Jimenez Lopez";

var nUF1841=new Array();
 nUF1841['4571880G']=5;
var nUF1842=new Array();
nUF1842['4571880G']=3;
var nUF1843=new Array();
nUF1843['4571880G']=2;
var nUF1844=new Array();
nUF1844['4571880G']=8;
var nUF1845=new Array();
nUF1845['4571880G']=9;
var nUF1846=new Array();
nUF1846['4571880G']=7;
jQuery( document ).ready(function( $ ) {
    //
    borrarFormulario();
    $("#dniError").hide();
    $("#nombreError").hide();
    $("#apellidosError").hide();
    $("#apellidosError").hide();
    $("#nUF1841Error").hide();
    $("#nUF1842Error").hide();
    $("#nUF1843Error").hide();
    $("#nUF1844Error").hide();
    $("#nUF1845Error").hide();
    $("#nUF1846Error").hide();

   function cargarAlumnos(){

    var totalAlumnos=0;
       for(var i=0;i<dnies.length;i++){
           var dni=dnies[i];
           var nombre = nombres[dni];
           var apellido=apellidos[dni];

           var total_notas=nUF1841[dni]+nUF1842[dni]+nUF1843[dni]+nUF1844[dni]+nUF1845[dni]+nUF1846[dni];
           var media_nota=total_notas/6;
           var listado_alumnos="<tr><td><input type='checkbox' value='"+dni+"'/></td><td>"+nombre+"</td><td>"+apellido+"</td>";
           listado_alumnos+="<td>"+nUF1841[dni]+"</td><td>"+nUF1842[dni]+"</td><td>"+nUF1843[dni]+"</td>";
           listado_alumnos+="<td>"+nUF1844[dni]+"</td><td>"+nUF1845[dni]+"</td><td>"+nUF1846[dni]+"</td> ";
           listado_alumnos+="<td>"+media_nota+"</td>";
           listado_alumnos+="<td><button>Editar</button></td>";
           listado_alumnos+="</tr>";

           $("#listado_alumnos tbody").append(listado_alumnos);
           totalAlumnos++;
       }


    }
    function mostrarNALumnos() {
        $("#totalAlumnos").text("Alumnos totales"+dnies.length);
    }
    $("#listado_alumnos thead input").click(function (e) {
        // $("#listado-alumnos tbody input[type='checkbox']").checked(true);
        //attr vs (prop e is) ---> tiempo de carga
        // prop vs is ---> prop identifica elementos cargados dinamicamente mientras is no

        if ($(this).prop("checked")) {
            $("#listado_alumnos tbody input").prop("checked", true);
        } else {
            $("#listado_alumnos tbody input").prop("checked", false);
        }
    });
    function recogerParametros() {
        var fdni=$("#dni").val();
        nombres[fdni]=$("#nombre").val();
        apellidos[fdni]=$("#apellidos").val();
        nUF1841[fdni]=$("#nUF1841").val();
        nUF1842[fdni]=$("#nUF1842").val();
        nUF1843[fdni]=$("#nUF1843").val();
        nUF1844[fdni]=$("#nUF1844").val();
        nUF1845[fdni]=$("#nUF1845").val();
        nUF1846[fdni]=$("#nUF1846").val();
        const REGEXDNI='/^[0-9]{8}[A-Z]$/i';
        var dni = new RegExp( '/^[0-9]{8}[A-Z]$/i');
        if (!fdni.match(dni)){
            $("#dniError").show();
        }
        if(nombres[fdni].length<5 || nombres[fdni].length>20){
            $("#nombreError").show();
        }

        dnies.push(fdni);





    }
    function crearArrays() {

    }
    $("#borrado").on("click",function (){
        //0 recoger el parametro
        // 1 borrado de vista

        var codigo=$("#listado_alumnos tbody input:checked").each(function(e){

            borradoBBDD($(this).val())
        });
        borradoVista();
        // borrado de la BBDD


        mostrarNALumnos();
    });
    $("#guardar").on("click",function (){

        recogerParametros();
        crearArrays();
        cargarAlumnos();

    });
    function borradoVista() {
        $("#listado_alumnos tbody tr input:checked").parents("tr").remove();
    }
    function borrarFormulario(){
        $("#dni").val("");
        $("#nombre").val("");
        $("#apellidos").val("");
        $("#nUF1841").val("");
        $("#nUF1842").val("");
        $("#nUF1843").val("");
        $("#nUF1844").val("");
        $("#nUF1845").val("");
        $("#nUF1846").val("");
    }
    cargarAlumnos();
    mostrarNALumnos();
    });


function letraDNI(dni)
{
var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
var posicion = dni%23;
var letra = cadena.substring(posicion,posicion+1);
return letra;
}
function  borradoBBDD(codigo) {
    var i = -1;
    var len = dnies.length;
    var found = false;
    var pos=-1;
    while (i < len && found == false) {
        if (codigo === dnies[i])
            found = true;
        pos = i;
        i++;
    }

    if(pos!=-1){
    dnies.splice(pos,1);
    nombres[codigo]
    }
}
function validarDni(dni) {

}
function validarTexto(nombre,len) {
    var len=9;
    var valido=false;
    if(dni.length==len){
        valido=true;
    }
}
function validarApellidos() {

}