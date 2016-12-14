/**
 * Created by Curso on 29/11/2016.
 */
$.noConflict();
var url="http://localhost:2403";
jQuery( document ).ready(function( $ ) {
    //
    $.ajax({
        url:url+"/alumno", success: function (data) {
            for (var i = 0; i<data.length; i++) {
                var alumnos = data;
                alumno = data[i];
                insertarAlumnoTabla(alumno)
            }
        }
    });

    function insertarAlumnoTabla(alumno) {
        var html = "<tr><td><input type='checkbox' value='"+alumno.id+"'/></td><td>" + alumno.nombre + "</td>";
        html+="<td>" + alumno.apellidos + "</td>";
        html+="<td>" + alumno.notas.UF1841 + "</td>";
        html+="<td>" + alumno.notas.UF1842 + "</td>";
        html+="<td>" + alumno.notas.UF1843 + "</td>";
        html+="<td>" + alumno.notas.UF1844 + "</td>";
        html+="<td>" + alumno.notas.UF1845 + "</td>";
        html+="<td>" + alumno.notas.UF1846 + "</td>";
        html+="<td><button class='btn btn-success' data-toggle='modal' data-id='"+alumno.id+"' data-target='#myModal'>Editar</button></td>";
        html+="</tr>";
        $("#listado_alumnos tbody").append(html);
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


    function crearArrays() {

    }

    $("#borrado").on("click", function () {
        //0 recoger el parametro
        // 1 borrado de vista

        var codigo = $("#listado_alumnos tbody input:checked").each(function (e) {
            $.ajax({
                url:url+"/alumno/"+$(this).val(), type:"DELETE",success: function (data) {

                }
            });

        });
        borradoVista();
        // borrado de la BBDD


        mostrarNALumnos();
    });
    $("#listado_alumnos tbody ").on("click","button", function () {

        


            $.ajax({
                url:url+"/alumno/"+$(this).attr("data-id"), type:"get",success: function (data) {
                    var datos = {id: '', nombre: '', dni: '', apellidos: '', notas: {}};

                     datos=data;
                    $("#nombre").val(datos.nombre);
                    $("#apellidos").val(datos.apellidos);
                    $("#dni").val(datos.dni);
                    $("#nUF1841").val(datos.notas.UF1841);
                    $("#nUF1842").val(datos.notas.UF1842);
                    $("#nUF1843").val(datos.notas.UF1843);
                    $("#nUF1844").val(datos.notas.UF1844);
                    $("#nUF1845").val(datos.notas.UF1845);
                    $("#nUF1846").val(datos.notas.UF1846);
                }


        });
        borradoVista();
        // borrado de la BBDD
    });

    $("#guardar").on("click", function () {
alert("guardar");
        datos=recogerParametros();
        $.ajax({
            url: url + "/alumno", type: "post",data:datos, success: function (data) {

            }
        });
        cargarAlumnos();

    });
    function borradoVista() {
        $("#listado_alumnos tbody tr input:checked").parents("tr").remove();
    }
    function recogerParametros(){
        var alumno={};
        var nombre=$("#nombre").val();
        var apellidos=$("#apellidos").val();
        var dni=$("#dni").val();


        var notas = {
            'UF1841': $("#nUF1841").val(),
            'UF1842': $("#nUF1842").val(),
            'UF1843': $("#nUF1843").val(),
            'UF1844': $("#nUF1844").val(),
            'UF1845': $("#nUF1845").val(),
            'UF1846': $("#nUF1846").val()
        };
       var datos = {nombre: nombre, apellidos: apellidos, dni: dni, notas: notas};
        return datos;
    }
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