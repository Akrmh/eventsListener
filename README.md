# EventListener

### creat app can calculate tow numbers and giv them summition

## HTML
- creat tow inputs in HTML.
- Each input take number as input.
- Creat button for calculating.
- creat blace where the result will be shown (ex: strong).

## CSS
- put some CSS style.

##  JAVASCRIPT
- For validating inputs we use if condition if there is no inputs
```js
 if (num1 === ''){
    return result.innerText = 'please provide num1 in the input'
  }
  if (num2 === ''){
    return result.innerText = 'please provide num2 in the input'
  } 
```
- If it's valid then give result of inputs
```js
result.innerHTML=`The Sum Is: ${parseInt(num1) + parseInt(num2)}`
```