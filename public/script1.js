async function getMeals() {
    console.log('data request');
    const diningRequest = await fetch('/api/wholeMeal');
    const diningData = await diningRequest.json();
    return diningData;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
async function windowActions() {
    console.log('load window');
    const results = await getMeals();
    const mealsinfo = results.data;

    const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, mealsinfo.length -1);
        return mealsinfo[random];
    });
    console.table(selectedMeals)

    const dataPoints1 =[];
    for(let i = 0; i < selectedMeals.length; i++) {
        console.log(dataPoints1);
        dataPoints1.push({label:selectedMeals[i].meal_name, y: selectedMeals[i].calories});
    }

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
            datapoints: dataPoints1
        }]
        
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
}

window.onload = windowActions;

