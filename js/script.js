const getNewColor = () => {
  let symbol = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbol[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
};
