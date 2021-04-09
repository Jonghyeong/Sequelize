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

//*Getting dining data for wholeMeal from apiRoute */
async function getMeals() {
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeal');
    const diningData = await diningRequest.json();
    return diningData;
}

//* Getting a random integer between two values,inclusive */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
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

    //*Get meals from getMeals function*//
    console.log('load window');
    const results = await getMeals();
    const mealsinfo = results.data;

     //* Create meal array for picking ten random meals and their macros  */
    const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, mealsinfo.length -1);
        return mealsinfo[random];
    });

    console.table(selectedMeals)

    //** Create Stacked Chart Meals Vs Macros **/
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Meals and Macros"
        },
        axisX: {
            title: "Meals"
        },
        axisY: {
            title: "Macros"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "calories",
            showInLegend: "true",
            color: "red",
            dataPoints: [
                {label:selectedMeals[0].meal_name , y: selectedMeals[0].calories},
                {label:selectedMeals[1].meal_name , y: selectedMeals[1].calories},
                {label:selectedMeals[2].meal_name , y: selectedMeals[2].calories},
                {label:selectedMeals[3].meal_name , y: selectedMeals[3].calories},
                {label:selectedMeals[4].meal_name , y: selectedMeals[4].calories},
                {label:selectedMeals[5].meal_name , y: selectedMeals[5].calories},
                {label:selectedMeals[6].meal_name , y: selectedMeals[6].calories},
                {label:selectedMeals[7].meal_name , y: selectedMeals[7].calories},
                {label:selectedMeals[8].meal_name , y: selectedMeals[8].calories},
                {label:selectedMeals[9].meal_name , y: selectedMeals[9].calories}
            ]
        },
        {
            type: "stackedBar",
            name: "cholesterol",
            showInLegend: "true",
            color: "khaki",
            dataPoints: [
                {label:selectedMeals[0].meal_name , y: selectedMeals[0].cholesterol},
                {label:selectedMeals[1].meal_name , y: selectedMeals[1].cholesterol},
                {label:selectedMeals[2].meal_name , y: selectedMeals[2].cholesterol},
                {label:selectedMeals[3].meal_name , y: selectedMeals[3].cholesterol},
                {label:selectedMeals[4].meal_name , y: selectedMeals[4].cholesterol},
                {label:selectedMeals[5].meal_name , y: selectedMeals[5].cholesterol},
                {label:selectedMeals[6].meal_name , y: selectedMeals[6].cholesterol},
                {label:selectedMeals[7].meal_name , y: selectedMeals[7].cholesterol},
                {label:selectedMeals[8].meal_name , y: selectedMeals[8].cholesterol},
                {label:selectedMeals[9].meal_name , y: selectedMeals[9].cholesterol}
            ]  
        },
        {
            type: "stackedBar",
            name: "sodium",
            showInLegend: "true",
            color: "lightblue",
            dataPoints: [
                {label:selectedMeals[0].meal_name , y: selectedMeals[0].sodium},
                {label:selectedMeals[1].meal_name , y: selectedMeals[1].sodium},
                {label:selectedMeals[2].meal_name , y: selectedMeals[2].sodium},
                {label:selectedMeals[3].meal_name , y: selectedMeals[3].sodium},
                {label:selectedMeals[4].meal_name , y: selectedMeals[4].sodium},
                {label:selectedMeals[5].meal_name , y: selectedMeals[5].sodium},
                {label:selectedMeals[6].meal_name , y: selectedMeals[6].sodium},
                {label:selectedMeals[7].meal_name , y: selectedMeals[7].sodium},
                {label:selectedMeals[8].meal_name , y: selectedMeals[8].sodium},
                {label:selectedMeals[9].meal_name , y: selectedMeals[9].sodium}
            ]  
        },
        {
            type: "stackedBar",
            name: "carbs",
            showInLegend: "true",
            color: "lightgreen",
            dataPoints: [
                {label:selectedMeals[0].meal_name , y: selectedMeals[0].carbs},
                {label:selectedMeals[1].meal_name , y: selectedMeals[1].carbs},
                {label:selectedMeals[2].meal_name , y: selectedMeals[2].carbs},
                {label:selectedMeals[3].meal_name , y: selectedMeals[3].carbs},
                {label:selectedMeals[4].meal_name , y: selectedMeals[4].carbs},
                {label:selectedMeals[5].meal_name , y: selectedMeals[5].carbs},
                {label:selectedMeals[6].meal_name , y: selectedMeals[6].carbs},
                {label:selectedMeals[7].meal_name , y: selectedMeals[7].carbs},
                {label:selectedMeals[8].meal_name , y: selectedMeals[8].carbs},
                {label:selectedMeals[9].meal_name , y: selectedMeals[9].carbs}
            ]  
        },
        {
            type: "stackedBar",
            name: "protein",
            showInLegend: "true",
            color: "salmon",
            dataPoints: [
                {label:selectedMeals[0].meal_name , y: selectedMeals[0].protein},
                {label:selectedMeals[1].meal_name , y: selectedMeals[1].protein},
                {label:selectedMeals[2].meal_name , y: selectedMeals[2].protein},
                {label:selectedMeals[3].meal_name , y: selectedMeals[3].protein},
                {label:selectedMeals[4].meal_name , y: selectedMeals[4].protein},
                {label:selectedMeals[5].meal_name , y: selectedMeals[5].protein},
                {label:selectedMeals[6].meal_name , y: selectedMeals[6].protein},
                {label:selectedMeals[7].meal_name , y: selectedMeals[7].protein},
                {label:selectedMeals[8].meal_name , y: selectedMeals[8].protein},
                {label:selectedMeals[9].meal_name , y: selectedMeals[9].protein}
            ]
        },
        {
            type: "stackedBar",
            name: "fat",
            showInLegend: "true",
            color: "navy",
            dataPoints: [
                {label:selectedMeals[0].meal_name , y: selectedMeals[0].fat},
                {label:selectedMeals[1].meal_name , y: selectedMeals[1].fat},
                {label:selectedMeals[2].meal_name , y: selectedMeals[2].fat},
                {label:selectedMeals[3].meal_name , y: selectedMeals[3].fat},
                {label:selectedMeals[4].meal_name , y: selectedMeals[4].fat},
                {label:selectedMeals[5].meal_name , y: selectedMeals[5].fat},
                {label:selectedMeals[6].meal_name , y: selectedMeals[6].fat},
                {label:selectedMeals[7].meal_name , y: selectedMeals[7].fat},
                {label:selectedMeals[8].meal_name , y: selectedMeals[8].fat},
                {label:selectedMeals[9].meal_name , y: selectedMeals[9].fat}
            ]  
        }

        ] /* closs data braket */
    
    });
    chart.render();
    

    function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    };
};


window.onload = windowActions;