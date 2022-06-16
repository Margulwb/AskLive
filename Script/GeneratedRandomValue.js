export function GeneratedValue() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678912345678123456789123456789";
  
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }