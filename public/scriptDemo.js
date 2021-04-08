async function populateRestarants(diningData) {
    console.log('populate');
    const table = document.getElementById('mytable');
    
    diningData.data.forEach((restaurant) => {
        
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
                <td>${restaurant.hall_id}</td>
                <td>${restaurant.hall_name}</td>
                <td>${restaurant.hall_address}</td>
            `;

        table.append(appendItem);        
    });
}

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
    populateRestarants(storedMealdata);
}

window.onload = windowActions;