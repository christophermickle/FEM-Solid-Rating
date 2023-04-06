import { createSignal } from "solid-js";

interface Props {
  rating: () => number;
  formComplete: (value: boolean) => void;
  updateRating: (value: number) => void;
}

const Rating = (props: Props) => {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("The rating is " + `${props.rating()}`);
    props.formComplete(true);
  };

  const handleBtnClick = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const rating = parseInt(target.innerText);
    props.updateRating(rating);
    console.log(rating);
  };
  return (
    <section class="p-4 min-w-full">
      <div class="rounded-full bg-slate-700/70 h-12 w-12 grid items-center justify-center mb-6">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h2 class="text-white text-2xl mb-2">How did we do?</h2>
      <p class="text-norm text-md_grey leading-5">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us
        <br /> improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div class="flex gap-3 my-8 items-center justify-between">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <label
                class={`${
                  props.rating() === index + 1
                    ? "bg-lt_grey text-white"
                    : "bg-slate-700/60 text-lt_grey"
                } rounded-full hover:bg-primary hover:text-white h-12 w-12 grid items-center justify-center cursor-pointer`}
              >
                <input
                  type="radio"
                  name="rating"
                  value={index + 1}
                  checked={props.rating() === index + 1}
                  class="opacity-0 absolute"
                  onChange={() => props.updateRating(index + 1)}
                />
                {index + 1}
              </label>
            ))}
        </div>
        <button class="bg-primary w-full rounded-full py-2 text-white hover:text-primary hover:bg-white">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Rating;
