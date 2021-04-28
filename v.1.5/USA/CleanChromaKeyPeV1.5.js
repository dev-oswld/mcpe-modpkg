// ModPe

function newLevel(){
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
clientMessage("§lWelcome " + Player.getName(getPlayerEnt()));
clientMessage("§l§aChroma Key in Minecraft PE");
clientMessage("§lVersion 1.5");
clientMessage("§lYou want to know more? /info");
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
}

// Command

function procCmd(command)
{
var cmd = command.split(" ");

if (cmd[0] == "info")
{
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
clientMessage("§lMap Maker & Mini Modder");
clientMessage("§lOswaldo Tacos");
clientMessage("§lFollow me in §bTwitter §f& §cYouTube");
clientMessage("§lSearch §a#ChromaKeyPe");
clientMessage("§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=§a=§8=");
}
}

// Creation of block
// Time destruction
// Brightness Level
// Add in the inventory

Block.defineBlock(249,'§c§lRed',[['rojo',0]],3,false,0);
Block.setDestroyTime(249,1);
Block.setLightLevel(249, 13);
Player.addItemCreativeInv(249,64);

Block.defineBlock(255,'§9§lBlue',[['azul',0]],3,false,0);
Block.setDestroyTime(255,1);
Block.setLightLevel(255, 13);
Player.addItemCreativeInv(255,64);

Block.defineBlock(248,'§a§lGreen',[['verde',0]],3,false,0);
Block.setDestroyTime(248,1);
Block.setLightLevel(248, 13);
Player.addItemCreativeInv(248,64);

// Made in Mexico



