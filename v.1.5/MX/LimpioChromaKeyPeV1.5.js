// ModPE

function newLevel(){
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
clientMessage("§lBienvenido " + Player.getName(getPlayerEnt()));
clientMessage("§l§aChroma Key en Minecraft PE");
clientMessage("§lVersión 1.5");
clientMessage("§l¿Quieres saber más? /info");
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
}

// Comando

function procCmd(command)
{
var cmd = command.split(" ");

if (cmd[0] == "info")
{
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
clientMessage("§lMap Maker & Mini Modder");
clientMessage("§lOswaldo Tacos");
clientMessage("§lSigueme en §bTwitter §f& §cYouTube");
clientMessage("§lBusca §a#ChromaKeyPe");
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
}
}

// Creación de bloque
// Tiempo de destrucción
// Nivel de brillo
// Añadir en el inventario

Block.defineBlock(249,'§c§lRojo',[['rojo',0]],3,false,0);
Block.setDestroyTime(249,1);
Block.setLightLevel(249, 13);
Player.addItemCreativeInv(249,64);

Block.defineBlock(255,'§9§lAzul',[['azul',0]],3,false,0);
Block.setDestroyTime(255,1);
Block.setLightLevel(255, 13);
Player.addItemCreativeInv(255,64);

Block.defineBlock(248,'§a§lVerde',[['verde',0]],3,false,0);
Block.setDestroyTime(248,1);
Block.setLightLevel(248, 13);
Player.addItemCreativeInv(248,64);

// Hecho en México



