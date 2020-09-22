window.addEventListener('load', start);

var R = 0;
var G = 0;
var B = 0;

function start() {
  adcionarCorRGB();
  var inputR = document.querySelector('#inputR');
  var inputG = document.querySelector('#inputG');
  var inputB = document.querySelector('#inputB');

  inputR.addEventListener('change', () => {
    const result = document.querySelector('#inputR2');
    result.value = inputR.value;
    R = inputR.value;
    adcionarCorRGB();
  });

  inputG.addEventListener('change', () => {
    const result = document.querySelector('#inputG2');
    result.value = inputG.value;
    G = inputG.value;
    adcionarCorRGB();
  });

  inputB.addEventListener('change', () => {
    const result = document.querySelector('#inputB2');
    result.value = inputB.value;
    B = inputB.value;
    adcionarCorRGB();
  });
}

function adcionarCorRGB() {
  var saidaCor = document.querySelector('#saidaCor');
  saidaCor.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}
