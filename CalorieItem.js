import './CalorieItem.css';

function CalorieItem(name,type,value) {
    const calorieName = "Cookies";
    const calorieType = "Sweets"
    const calorieValue = 360.


    return (<div className="calorie-item">
            {calorieName}
        <div className="calorie-item_description">
            <h2>{calorieType}</h2>
            <div className="calorie-item_val" >
                {calorieValue}
            </div>
        </div>
            
    
    </div>);






}

export default CalorieItem;
