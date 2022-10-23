// getting all the needed dom elements
var keys = document.querySelectorAll('.keys');
var board = document.querySelector("#board");
var result = document.querySelector("#result");


for (var key of keys) {
  key.addEventListener('click', (e) => {
    var text = e.target.innerText;
    if (text === "=") {
      try {
        ln2log()
        var res = math.evaluate(board.value);
        math.format(res, { precision: 10 });
        result.value = res;
        board.value = ''
      } catch (error) {
        result.value = "err";
        board.value = ''
      }
    } else if (text === "AC") {
      result.value = '';
      board.value = '';
    } else {
      board.value += getVal(text);
    }
  })
}


function getVal(text) {
  switch (text) {
    case '+':
      return '+'
      break;
    case 'x':
      return '*'
      break;
    case '√':
      return 'sqrt('
      break;
    case 'x!':
      return '!'
      break;
    case '−':
      return '-'
      break;
    case '÷':
      return '/'
      break;
    case 'tan':
      return 'tan(deg '
      break;
    case 'cos':
      return 'cos(deg '
      break;
    case 'x y':
      return '^'
      break;
    case 'sin':
      return 'sin(deg '
      break;
    case 'log':
      return 'log('
      break;
    case 'ln':
      return 'ln('
      break;
    case 'EXP':
      return '*10^'
      break;
    default:
      return text;
  }
}

function ln2log() {
  const ln = 'ln(', closure = ')', val = board.value
  var start = val.indexOf(ln)
  var end = val.indexOf(closure, start)
  var num = val.substring(start + 3, end);

  if (start !== -1) {
    board.value = val.substring(0, start) + "log(" + num + ",e)" + val.substring(end + 1, val.length)
  }

}