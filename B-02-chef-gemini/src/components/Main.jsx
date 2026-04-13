import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

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
        <IngredientsList
          ingredientsListItems={ingredientsListItems}
          ingredients={ingredients}
          setRecipeShown={setRecipeShown}
        />
      )}

      {/* get recipe from the chef and display */}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}

export default Main;
