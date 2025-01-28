import Link from "next/link";
import MealInput from "./components/MealInput";
export const metadata = {
    title: 'All Meals',
    description: 'Loaded Meals Data From MealDB API',
}
export default async function MealsPage({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      // console.log(res);
      const data = await res.json();
      // setMeals(data.meals)
      // console.log(data.meals);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = (await fetchMeals()) || [];
  return (
    <div>
      <MealInput></MealInput>
      <div className="grid grid-cols-4 gap-4">
        {meals.map((meal, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{meal?.strMeal}</p>
            <p className="mb-3">{meal.strInstructions.substring(0, 100)}..</p>
           <Link href={`/meals/${meal?.idMeal}`}> <button className="bg-green-600 text-white px-5 py-3 rounded-md">Explore More</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
