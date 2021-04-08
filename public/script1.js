async function getMeals() {
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeal');
    const diningData = await diningRequest.json();
    return diningData;
}

async function windowActions() {
    console.log('load window');
    const meals = await getMeals();
    console.table(meals.data);

}

window.onload = windowActions;

