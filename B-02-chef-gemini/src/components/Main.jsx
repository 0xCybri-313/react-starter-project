import React, { useState } from "react";

function Main() {
  /**
   * Challenge: Update our app so that when the user enters a
   * new ingredient and submits the form, it adds that new
   * ingredient to our list!
   */

  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newIngredient = formData.get("ingredient");

    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main className="flex justify-center bg-[#FAFAF8] p-16">
      <section className="flex w-fit flex-col gap-4">
        <form
          onSubmit={handleSubmit}
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
        <ul className="list-inside list-disc">{ingredientsListItems}</ul>
      </section>
    </main>
  );
}

export default Main;
