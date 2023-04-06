import { Component, createSignal, Show } from "solid-js";
import Card from "./Card";
import Rating from "./Rating";

const App: Component = (props) => {
  const [rating, setRating] = createSignal(0);
  const [formComplete, setFormComplete] = createSignal(false);
  console.log(rating());
  return (
    <div class="min-w-full min-h-screen grid justify-center">
      <Card>
        <Show
          when={formComplete()}
          fallback={
            <Rating
              rating={rating}
              formComplete={setFormComplete}
              updateRating={setRating}
            />
          }
        >
          <p>The rating you entered is {rating()}</p>
        </Show>
      </Card>
    </div>
  );
};

export default App;
