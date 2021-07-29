const submit = document.querySelector('#submit-button');
submit.addEventListener('click', () => {

    const input = document.querySelector('#translator-input');
    const inputVal = input.value;
    const results = document.querySelector('#results');
    const  radioSelect = document.querySelector('input[type=radio]:checked');
    if (radioSelect.value === 'encode'){
        results.innerText = encode(inputVal)
}    
    if (radioSelect.value === 'translate'){
        results.innerText = translate(inputVal)
}    
    if (radioSelect.value === 'madlib'){
        results.innerText = madlib(inputVal)
}    
    if (radioSelect.value === 'search') {
         results.innerHTML = '';
         const emojis = search(inputVal)

         if (emojis.length < 1) {
             results.innerText = 'No emojis found'
         }
         let searchResults = document.createElement('p')
         results.appendChild(searchResults)
         for (emoji of emojis) {
             searchResults.innerText += emoji.symbol
         }
    } 
    
    if (radioSelect.value === 'random') {
        const rng = () => Math.floor(Math.random() * 4);
        let random = rng();

        if (random === '0'){
            results.innerText = encode(inputVal)
        }    
        if (random === '1'){
            results.innerText = translate(inputVal)
        }    
        if (random === '2'){
            results.innerText = madlib(inputVal)
        }    
        if (random === '3'){
            radioSelect.value = 'search'
            }    
        console.log(random)
        }
        
           
    }

    

)