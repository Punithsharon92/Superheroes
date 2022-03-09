const charactersList = document.querySelector('.mainContainer');
const searchBar = document.querySelector('input');
const selectOption = document.querySelector('#publishers');
const selectLang=document.querySelector('#lang');
let hpCharacters = [];
let langval=1;




searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.superhero.toLowerCase().includes(searchString) 
            // || character.characters.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

selectOption.addEventListener('change', (e) => {
    const optionValue = e.target.value;
    console.log(optionValue)
    if(optionValue==1){
    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.publisher.toLowerCase().includes('dc comics') 
            || character.publisher.includes('डीसी कॉमिक्स') 
        );
    });
    displayCharacters(filteredCharacters);
}else
if(optionValue==2){
    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.publisher.toLowerCase().includes('marvel comics') 
            || character.publisher.includes('मार्वल कॉमिक्स') 
        );
    });
    displayCharacters(filteredCharacters);
}else{
    const filteredCharacters = hpCharacters;
    displayCharacters(filteredCharacters);
}
});

selectLang.addEventListener('change',(e)=>{ 
    langval=e.target.value;
    loadCharacters(langval);
});  


const loadCharacters = async (langval) => {
    console.log(langval);
    try {         
        if(langval==2){
        const res = await fetch('hindi.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        }else
        {
        const res = await fetch('data.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        }
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class ="card">
             <h1>${character.superhero}</h1>
             <h3>Publisher:${character.publisher}</h3>
             <h3>Alter Ego:${character.alter_ego}</h3>
             <h3>First Apperance:${character.first_appearance}</h3>
             <h3>Characters:${character.characters}</h3>
            </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();


// let data=[];

// // document.querySelector('input').addEventListener('keyup', (event)=>{
// //     const val=event.target.value;
// //     data.filter(sheros=>{
// //        return (sheros.superhero.includes(val) ||  sheros.characters.includes(val));
// //     });
// //   });

// const loadData=fetch("data.json")
// .then(response => response.json())
// .then(data =>{
 
   

//     let arrayy=document.querySelector(".mainContainer").innerHTML= `${data.map(
//         (info)=>{
//             return `
//             <div class ="card">
//              <h1>${info.superhero}</h1>
//              <h3>Publisher:${info.publisher}</h3>
//              <h3>Alter Ego:${info.alter_ego}</h3>
//              <h3>First Apperance:${info.first_appearance}</h3>
//              <h3>Characters:${info.characters}</h3>
//             </div>
//             `
//         }
//     ).join('')};`
// });





// loadCharacters=fetch("data.json")
// .then(response => response.json())
// .then(hpCharacters =>{
//     let arrayy=document.querySelector(".mainContainer").innerHTML= `${hpCharacters.map(
//         (character)=>{
//             return `
//            <div class ="card">
//              <h1>${character.superhero}</h1>
//              <h3>Publisher:${character.publisher}</h3>
//              <h3>Alter Ego:${character.alter_ego}</h3>
//              <h3>First Apperance:${character.first_appearance}</h3>
//              <h3>Characters:${character.characters}</h3>
//             </div>
//             `
//         }
//     ).join('')};`
// });
// loadCharacters();
