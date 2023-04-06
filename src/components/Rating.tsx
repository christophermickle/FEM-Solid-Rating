import { Setter, Signal, createSignal } from "solid-js";

const Rating = (props:()=>(void)) => {
    const handleSubmit = (e:SubmitEvent) => {
        e.preventDefault();
        console.log('The rating is ' + `${props.rating()}`);
        props.formComplete(true)
    }

    const handleBtnClick = (e:MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        const rating = parseInt(target.innerText);
        props.updateRating(rating);
        console.log(rating);
    }
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
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div class="flex gap-3 my-8 items-center justify-between" onClick={handleBtnClick}>
          <button type="button" class="rounded-full hover:bg-primary hover:text-white bg-slate-700/60 h-12 w-12 grid items-center justify-center text-lt_grey">
            1
          </button>
          <button type="button" class="rounded-full hover:bg-primary hover:text-white bg-slate-700/60 h-12 w-12 grid items-center justify-center text-lt_grey">
            2
          </button>
          <button  type="button"class="rounded-full hover:bg-primary hover:text-white bg-slate-700/60 h-12 w-12 grid items-center justify-center text-lt_grey">
            3
          </button>
          <button  type="button"class="rounded-full hover:bg-primary hover:text-white bg-slate-700/60 h-12 w-12 grid items-center justify-center text-lt_grey">
            4
          </button>
          <button type="button" class="rounded-full hover:bg-primary hover:text-white bg-slate-700/60 h-12 w-12 grid items-center justify-center text-lt_grey">
            5
          </button>
        </div>
        <button class="bg-primary w-full rounded-full py-2 text-white active:text-primary active:bg-white">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Rating;
