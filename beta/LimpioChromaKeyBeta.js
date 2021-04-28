// Hecho en México
// Oswaldo_Tacos

function newLevel(){
clientMessage("§8=============================");
clientMessage("§lBienvenido " + Player.getName(getPlayerEnt()));
clientMessage("§l§aChroma Key en Minecraft PE");
clientMessage("§lBeta");
clientMessage("§l¿Quieres saber más? /info");
clientMessage("§8=============================");
}

Block.defineBlock(136,'§c§lRojo',[['rojo',0]],3,false,0);
Block.setDestroyTime(136,1);
Player.addItemCreativeInv(136,64);

Block.defineBlock(135,'§9§lAzul',[['azul',0]],3,false,0);
Block.setDestroyTime(135,1);
Player.addItemCreativeInv(135,64);

Block.defineBlock(134,'§a§lVerde',[['verde',0]],3,false,0);
Block.setDestroyTime(134,1);
Player.addItemCreativeInv(134,64);






