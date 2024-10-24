








const handleSum = () => {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const result = document.getElementById('result')
  
  
  if (num1 === ''){
    return result.innerText = 'please provide num1 in the input'
  }
  if (num2 === ''){
    return result.innerText = 'please provide num2 in the input'
  }
  result.innerHTML=`The Sum Is: ${parseInt(num1) + parseInt(num2)}`

}