document.addEventListener('DOMContentLoaded', function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equals = document.querySelector('.equal');
   
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
      });
    });
  
    equals.addEventListener('click', function() {
      try {
        let result = eval(screen.value);
        screen.value = result;
      } catch (error) {
        screen.value = 'Error';
      }
    });
  
    clear.addEventListener('click', function() {
      screen.value = '';
    });
  });
  