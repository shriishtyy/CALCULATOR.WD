// The percentage (%) symbol in a calculator represents a proportion or ratio in relation to 100. It's a way of expressing a fraction of a whole in terms of hundredths.
// For example, entering "50%" means 50 divided by 100, which equals 0.5. It's commonly used for calculating percentages, such as finding a percentage of a number or calculating percentage increase or decrease.
let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == '%'){
            string = string+e.target.innerHTML;;
            document.querySelector('input').value = string; 
        }
        else{
        console.log(e.target)
        string= string+e.target.innerHTML;
        document.querySelector('input').value = string; 
        }
    })
    
})
