async function populateRestarants() {
    console.log('populate');
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json();
    

    diningData.data.forEach((restaurant) => {
        const appendItem = document.getElementById('mytable');
        appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'is-3');
        appendItem.innerHTML = `
            <tr>
                <td class="subtitle has-text-light has-text-weight-bold">
                    ${restaurant.hall_id[0]}</td>
                <td class="has-text-light">
                    ${restaurant.hall_name[1]}
                </td>
                <td class="has-text-light">
                    ${restaurant.hall_address.split(','[2])}
                </td>
            </tr>
        `;
        tagerBox.append(appendItem);        
    });
}

function setComplexData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

async function windowActions() {
    console.log('loaded window');
    const meals = await getMeals();

    setComplexData(meals);
    const storedMeals = localStorage.getItem('data');
    const storedMealdata = JSON.parse(storedMeals);
    console.log(storedMeals);
    console.log(storedMealdata);
}

window.onload = windowActions;