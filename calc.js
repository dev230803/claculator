console.log('connected');
var string="";

var buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        if (isNaN(string) || !isFinite(string)) {
          string = "Invalid expression";
        }
        document.querySelector('input').value = string;
      } catch (error) {
        string = "Invalid expression";
        document.querySelector('input').value = string;
      }
    } else if (e.target.innerHTML == 'Clear') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'Delete') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
