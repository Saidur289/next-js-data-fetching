

const fetchMeals = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
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
  export async function generateMetadata ({params}){
      const id = (await params).id
      const [singleMeals]= await fetchMeals(id)
      return {
          title: singleMeals?.strMeal, 
          description: singleMeals?.strInstructions,
      }
  }
export default async function SingleMeals({ params }) {

  const id = (await params).id 
  const [meals] = await fetchMeals(id) || [];
  return (
    <div>
        <p className="text-2xl font-bold text-green-600">Meal Id Number: {meals?.idMeal}</p>       
        <h1 className="text-xl my-3">{meals?.strMeal}</h1>
        <p className="font-semibold">{meals?.strInstructions}</p>
      </div>

  );
}
