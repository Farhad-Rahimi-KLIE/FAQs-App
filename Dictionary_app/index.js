const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const btn = document.getElementById('search-btn');

btn.addEventListener('click',()=>{
    let inputja = document.getElementById('inp-word').value;
    fetch(`${url}${inputja}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
       result.innerHTML = `
           <div class="word">
            <h3>${inputja}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
           ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
    }).catch(()=>{
        result.innerHTML = '<h1 class="error">This big Error Please Enter valid Name....</h1>'
    })
})