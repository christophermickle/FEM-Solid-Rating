  import Thanks from "./Thanks";
  interface Props {
    rating: () => number;
  }

  const Completion = (props:Props) => {
    return (
      <>
      <div class="grid place-items-center text-center px-8" >
        <Thanks/>
        <p class="text-primary text-norm bg-slate-700/60 px-6 py-1  my-4 rounded-full">
          You selected {props.rating()} out of 5
        </p>
        <h2 class="text-white text-2xl  my-4">Thank you!</h2>
        <p class="text-norm text-md_grey leading-5 my-4">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't <br/>hesitate to get in touch!
        </p>
      </div>
      </>
    );
  };

  export default Completion;
