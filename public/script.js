// async function populateRestarants(Dining) {
//     console.log('populate');


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

async function getDining() {
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
    const meals = await getDining();

    setComplexData(meals);
    const storedMeals = localStorage.getItem('data');
    const storedMealdata = JSON.parse(storedMeals);
    console.log(storedMeals);
    console.log(storedMealdata);
    
    storedMealdata.data.forEach((restaurants) => {
        const table = document.getElementById('mytable');
        const tablerow = document.createElement('tr');

        const row = `
                        <td>${restaurants.hall_id}</td>
                        <td>${restaurants.hall_name}</td>
                        <td>${restaurants.hall_address}</td>

                    `;

        tablerow.innerHTML = row;
        table.append(tablerow)
    });
}

window.onload = windowActions;