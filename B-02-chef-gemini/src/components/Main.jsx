import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../../ai";
import { useRef } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

  const recipeSection = useRef(null);

  React.useEffect(() => {
    if (recipeShown && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeShown]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
  }

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
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          setRecipeShown={setRecipeShown}
        />
      )}

      {/* get recipe from the chef and display */}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}

export default Main;
