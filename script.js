var e2p2 = document.getElementById('ufo');
var drawProcess = e2p2.getContext('2d');
// On dessine avec canvas le module principal
drawProcess.beginPath();
drawProcess.moveTo(100,230);
drawProcess.quadraticCurveTo(200,280,300,230);
drawProcess.moveTo(300,230);
drawProcess.quadraticCurveTo(200,160,100,230);
drawProcess.closePath();
drawProcess.fillStyle = '#e0e1f3';
drawProcess.fill();
// Puis le module secondaire
drawProcess.beginPath();
drawProcess.moveTo(150,200);
drawProcess.quadraticCurveTo(200,70,250,200);
drawProcess.fillStyle = '#FFFFFF';
drawProcess.fill();
