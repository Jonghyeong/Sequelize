// async function populateRestarants() {
//     console.log('populate');
//     const diningRequest = await fetch('/api/dining');
//     const diningData = await diningRequest.json();
    

//     diningData.data.forEach((restaurant) => {
//         const appendItem = document.getElementById('mytable');
//         appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'is-3');
//         appendItem.innerHTML = `
//             <tr>
//                 <td class="subtitle has-text-light has-text-weight-bold">
//                     ${restaurant.hall_id[0]}</td>
//                 <td class="has-text-light">
//                     ${restaurant.hall_name[1]}
//                 </td>
//                 <td class="has-text-light">
//                     ${restaurant.hall_address.split(','[2])}
//                 </td>
//             </tr>
//         `;
//         tagerBox.append(appendItem);        
//     });
// }

async function getMeals() {
    console.log('data request');
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json();
    return diningData;
}

function setBasicData() {
    localStorage.setItem('myCat', 'Tom');
}

function getBasicData() {
    return localStorage.getItem('myCat');
}

function setComplexData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

async function windowActions() {
    console.log('loaded window');
    const meals = await getMeals();

    // setBasicData();
    // const cat = getBasicData();
    // console.log(cat);
    setComplexData(meals);
    const storedMeals = localStorage.getItem('data');
    const storedMealdata = JSON.parse(storedMeals);
    console.log(storedMeals);
    console.log(storedMealdata);

    for (const i in storedMealdata){
        const row = `<tr>
                        <td>${storedMealdata[i].hall_id}</td>
                        <td>${storedMealdata[i].hall_name}</td>
                        <td>${storedMealdata[i].hall_address}</td>
                      </tr>`;
        const table = $('mytable');
        table.append(row)
    };

}

window.onload = windowActions;