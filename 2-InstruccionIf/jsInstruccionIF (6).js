function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if (edad<13)

{ alert("Es un niño");}

else
if (edad>=18)

{ alert("Es mayor de edad");}

else
if ((edad>=13) && (edad<=17))

{ alert("Es adolesente");}




}//FIN DE LA FUNCIÓN