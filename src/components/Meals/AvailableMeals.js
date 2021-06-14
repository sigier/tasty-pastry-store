import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_PRODUCTS = [
    {
        id: 'm1',
        name: 'Pretzel',
        description: 'Pretzels can be made with both sweet and savoury flavours',
        price: 1.99
    },
    {
        id: 'm2',
        name: 'Profiteroles',
        description: 'French dessert',
        price: 3.75
    },
    {
        id: 'm3',
        name: 'Croissants',
        description: 'Typically eaten at breakfast',
        price: 4.00
    },
    {
        id: 'm4',
        name: 'Canolli',
        description: 'Dough filled with ricotta cheese',
        price: 7.40
    }
];

const AvailableMeals = () => {
    const mealsList = DUMMY_PRODUCTS.map(
        meal =>
            <MealItem 
             key={meal.id}
             id={meal.id}
             name={meal.name}
             description ={meal.description}
             price = {meal.price}
            /> 
    );

    return (<section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>

    </section>
    );
};





export default AvailableMeals;