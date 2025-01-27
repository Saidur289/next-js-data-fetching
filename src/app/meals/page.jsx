import MealInput from "./components/MealInput"
export default  async function MealsPage({searchParams}) {
    const query = await searchParams
   
    const fetchMeals = async() => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            console.log(res);
            const data = await res.json()
            // setMeals(data.meals)
            console.log(data.meals);
            return data.meals 
        }
        catch(error){
            console.log(error);
            return []
        }
    }
 
  const meals = await fetchMeals()
  return (
    <div>
     <h1>Total Meals : {meals.length}</h1>
     <MealInput></MealInput>
     <div className='grid grid-cols-4 gap-4'>
        {
            meals.map((meal) => <div key={meal.id}>
                <p className='text-2xl font-bold'>{meal?.strMeal}</p>
                <p>{meal.strInstructions}</p>
            </div>)
        }
     </div>
    </div>
  )
}
