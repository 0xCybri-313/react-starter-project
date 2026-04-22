import React from "react";

function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="w-xl">
      <div className="m-4 flex flex-col justify-center gap-4">
        <h2 className="text-xl font-bold">Ingredients on hand:</h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          {ingredientsListItems}
        </ul>
      </div>

      {/* Only render when there is four ingredient */}

      {props.ingredients.length > 3 && (
        <div className="get-recipe-container flex h-32 w-xl items-center justify-evenly bg-[#F0EFEB]">
          <div ref={props.ref} className="flex flex-col justify-center gap-1">
            <h3 className="font-semibold">Ready for a recipe?</h3>
            <p className="text-gray-500">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            onClick={() => props.setRecipeShown((prev) => !prev)}
            className="rounded-md bg-[#D17557] px-4 py-2 font-semibold text-white"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
