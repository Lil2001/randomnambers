let first_block_one = document.getElementById('first_block_one');
let first_block_two = document.getElementById('first_block_two');
let first_block_three = document.getElementById('first_block_three');
let second_block_one = document.getElementById('second_block_one');
let second_block_two = document.getElementById('second_block_two');
let second_block_three = document.getElementById('second_block_three');
let result = document.getElementById('result')
let a = 0;

if (a ==  0) {
  q = Math.ceil(Math.random() * 10);
  first_block_one.addEventListener("click", () => {
    first_block_one.innerHTML = q
      a = 1
if (a == 1) {
  w = Math.ceil(Math.random() * 10);
    first_block_two.addEventListener("click", () => {
     first_block_two.innerHTML = w
        a = 2
if (a == 2) {
  e = Math.ceil(Math.random() * 10);
    first_block_three.addEventListener("click", () => {
    first_block_three.innerHTML = e
        a = 3
if (a == 3) {
  r = Math.ceil(Math.random() * 10);
    second_block_one.addEventListener("click", () => {
    second_block_one.innerHTML = r
    a = 4
if (a == 4) {
    t = Math.ceil(Math.random() * 10);
    second_block_two.addEventListener("click", () => {
    second_block_two.innerHTML = t
      a = 5
if (a == 5) {
    y = Math.ceil(Math.random() * 10);
   second_block_three.addEventListener("click", () => {
   second_block_three.innerHTML = y
  a = 6
let pc = Number(first_block_one.innerHTML) + Number(first_block_two.innerHTML) + Number(first_block_three.innerHTML)
let you = Number(second_block_one.innerHTML) + Number(second_block_two.innerHTML) + Number(second_block_three.innerHTML)
 if (pc > you) {
  result.innerHTML = "Pc: " + " " + pc + " " + "(You Lose)" + "  " + "You: " + you;
  } else if (pc < you) {
  result.innerHTML = "Pc: " + " " + pc + " " + "(You Win)" + "  " + "You: " + you;
  } else if (pc == you) (
  result.innerHTML = "Pc: " + " " + pc + " " + "(Nothing)" + "  " + "You: " + you
                                                )
                                            })
                                        } 
                                    })
                                }  
                            })
                        }   
                    })
                }
            })
        }
    })
} 














