import { Component, ParentProps } from "solid-js";
import thanksImg from "../assets/thanks.svg";
const Completion: Component<ParentProps> = (props) => {
  return (
    <>
    {/* align  items center */}
    <div class="grid place-items-center text-center" >
      <img src={thanksImg} alt="" />
      <p class="text-primary max-w-prose bg-slate-700/60 px-4 py-1 my-4 rounded-full">
        You selected {props.rating()} out of 5
      </p>
      <h2 class="text-white text-2xl mb-2">Thank you!</h2>
      <p class="text-norm text-md_grey leading-5">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
    </>
  );
};

export default Completion;
