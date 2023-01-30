import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
  };
};

export default function Home({ recipes }) {
  console.log(recipes);
  return (
    <div className="recipe-list grid grid-cols-2 gap-8 overflow-hidden">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
