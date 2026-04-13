import React, { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  /**
   * Challenge: clean up our code!
   * Let's make a couple new components to make things a
   * little cleaner. (Notice: I'm not suggesting what we
   * have now is bad or wrong. I'm mostly finding an excuse
   * to get in some hands-on practice 🙂)
   *
   * 1. Move the entire recipe <section> into its own
   *    ClaudeRecipe component
   * 2. Move the list of ingredients <section> into its
   *    own IngredientsList component.
   *
   * While you're considering how to structure things, consider
   * where state is, think about if it makes sense or not to
   * move it somewhere else, how you'll communicate between
   * the parent/child components, etc.
   *
   * The app should function as it currently does when you're
   * done, so there will likely be some extra work to be done
   * beyond what I've listed above.
   */

  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    const newIngredient = event.get("ingredient");

    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main className="flex flex-col items-center bg-[#FAFAF8] p-16">
      <section className="flex w-fit flex-col gap-4">
        <form
          action={handleSubmit}
          className="add-ingredient-form flex justify-center gap-4"
        >
          <input
            className="h-12 w-96 rounded-xl border border-[#D1D5DB] bg-white px-4"
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button className="h-12 w-40 rounded-xl bg-[#141413] text-white">
            + Add ingredient
          </button>
        </form>
      </section>

      {/* Only render when there is at least one ingredient */}

      {ingredients.length > 0 && (
        <section className="w-xl">
          <div className="m-4 flex flex-col justify-center gap-4">
            <h2 className="text-xl font-bold">Ingredients on hand:</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              {ingredientsListItems}
            </ul>
          </div>

          {/* Only render when there is four ingredient */}

          {ingredients.length > 3 && (
            <div className="get-recipe-container flex h-32 w-xl items-center justify-evenly bg-[#F0EFEB]">
              <div className="flex flex-col justify-center gap-1">
                <h3 className="font-semibold">Ready for a recipe?</h3>
                <p className="text-gray-500">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                onClick={() => setRecipeShown(true)}
                className="rounded-md bg-[#D17557] px-4 py-2 font-semibold text-white"
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
      )}

      {/* get recipe from the chef and display */}

      {recipeShown && (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}

export default Main;
