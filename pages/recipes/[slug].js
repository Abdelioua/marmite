import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// compontnets
import Skeleton from "../../components/Skeleton";

const client = createClient({
  space: process.env.SPACE,
  accessToken: process.env.TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  if (!res.items.length)
    return {
      redirects: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: { recipe: res.items[0] },
    revalidate: 1,
  };
};

const recipeDetails = ({ recipe }) => {
  if (!recipe) return <Skeleton />;

  const { title, cookingTime, feautureImage, method, ingredient } =
    recipe.fields;
  return (
    <div>
      <div className="banner container flex justify-center relative m-5">
        <Image
          className=""
          alt={title}
          src={"https:" + feautureImage.fields.file.url}
          width={feautureImage.fields.file.details.image.width}
          height={feautureImage.fields.file.details.image.height}
        />
        <h2 className="absolute bg-white left-1/3 bottom-0 -rotate-2 uppercase font-bold">
          {title}
        </h2>
      </div>
      <div className="info my-5">
        <p>Takes {cookingTime} to cook</p>
        <h2 className="font-bold">Ingrediants:</h2>
        {ingredient.map((ing, i) => (
          <span key={i} className="bg-gray-300 rounded-sm p-2 ml-1">
            {ing}
          </span>
        ))}
      </div>
      <div className="method">
        <h2 className="font-bold my-5">Method: </h2>
        {documentToReactComponents(method)}
      </div>
    </div>
  );
};

export default recipeDetails;
