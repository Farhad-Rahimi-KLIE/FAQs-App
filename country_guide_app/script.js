// let finalUrl =
const button = document.getElementById('search-btn');
const inputjan = document.getElementById('country_inp');

button.addEventListener('click',()=>{
    let inputvalue = inputjan.value;
    let finalurl = `https://restcountries.com/v3.1/name/${inputvalue}?fullText=true`;
    fetch(finalurl).then((response)=>{
        return response.json();
    }).then((data)=>{
        result.innerHTML =`
        <img src="${data[0].flags.svg}" class="flags-img">
        <h3>${data[0].name.common}</h3>
        <div class="data-wrapper">
        <h4>Capital</h4>
        <span>${data[0].capital}</span>
</div>
    <div class="data-wrapper">
        <h4>Continents</h4>
        <span>${data[0].continents[0]}</span>
</div>
    <div class="data-wrapper">
        <h4>Currency</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
</div>
 <div class="data-wrapper">
        <h4>Languages</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
</div>
        `;
    }).catch(()=>{
        if (inputvalue.length == 0){
            result.innerHTML = '<h3>the input field can not be empty..</h3>';
        }else{
            result.innerHTML = `<h3>Please Enter valid country Name...</h3>`
        }
    })
})