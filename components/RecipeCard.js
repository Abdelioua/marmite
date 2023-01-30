import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;
  return (
    <div className="card bg-white overflow-hidden ">
      <div className="featured">
        <Image
          className="w-full transition ease-in-out duration-750  hover:scale-110"
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt={title}
        />
      </div>
      <div className="content p-4">
        <div className="info">
          <h4 className=" font-bold">{title}</h4>
          <p>Takes approx {cookingTime} mins to cook</p>
        </div>
      </div>
      <div className="actions flex justify-end">
        <Link
          className="bg-red-500 text-white p-2 rounded-sm"
          href={`/recipes/${slug}`}
        >
          Cook this
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
