import Link from "next/link";
import MealInput from "./components/MealInput";
import Image from "next/image";
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
          <div key={index} className="border-2 border-green-200 shadow-lg p-3">
            <Image src={meal?.strMealThumb} width={640} height={400}/>
            <p className="text-2xl font-bold py-3">{meal?.strMeal}</p>
            <p className="mb-3">{meal.strInstructions.substring(0, 100)}..</p>
           <Link href={`/meals/${meal?.idMeal}`}> <button className="bg-green-600 text-white px-5 py-3 rounded-md">Explore More</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
