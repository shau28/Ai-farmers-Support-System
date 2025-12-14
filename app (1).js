function getBotReply(msg) {
  msg = msg.toLowerCase();
  if(msg.includes("weather")) return "Check Weather Alerts section.";
  if(msg.includes("labour")) return "Visit Labour Connect to find workers.";
  if(msg.includes("machine")) return "Open Machine Shop for equipment.";
  return "I am here to help farmers 24×7.";
}
