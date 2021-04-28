/*Creado Por Oswaldo*/
/*Información 12345*/
/*Gracias Wartave por tus tutoriales*/

function newLevel()
{
clientMessage("§a§o En Preparacion");

clientMessage("§6§oBy Oswaldo Tacos");
}

function procCmd(command) {
var m = command.split(" ");
if(m[0] == "okey") {
addItemInventory(260, 1, 0)
}
else if(command == "ok") {
addItemInventory(267, 4, 0)
}
}