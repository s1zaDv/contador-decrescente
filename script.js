let num = parseInt(prompt(`Digite seu número:`));

while (num >= 0) {
  if (num != 0) {
  alert(`${num}...`);
} else {
  alert(`${num}`);
}

  num--;
}

alert(`Contagem Finalizada!`);
