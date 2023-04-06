import { Component, ParentProps } from "solid-js";

const Card: Component<ParentProps> = (props) => {
  return (
    <div class="bg-md_blue grid items-center justify-center mx-auto my-auto px-4  rounded-[40px] min-h-[15em] max-h-[23.5em]  aspect-square">
      {props.children}
    </div>
  );
};

export default Card;
