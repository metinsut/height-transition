import React, { useRef, useEffect } from "react";

const HeightTransition = props => {
   const divElem = useRef(null);

   const toggleButton = () => {
      divElem.current.style.height = divElem.current.scrollHeight + "px";
      if (divElem.current.clientHeight !== 0) {
         divElem.current.style.height = "0px";
      }
   };

   useEffect(() => {
      divElem.current.style.height = "auto";
      divElem.current.style.overflow = "hidden";
      divElem.current.style.transition = `height ${props.time ? props.time : "300ms"} ${props.animation ? props.animation : "ease"}`;
      window.addEventListener("transitionend", onTransitionend);
      props.toggle.current.addEventListener("click", toggleButton);
      return () => {
         window.removeEventListener("transitionend", onTransitionend);
         props.toggle.current.removeEventListener("click", toggleButton);
      };
   });

   const onTransitionend = () => {
      if (divElem.current.clientHeight !== 0) {
         divElem.current.style.height = "auto";
      }
   };

   return (
      <div style={props.styles} ref={divElem}>
         {props.children}
      </div>
   );
};

export default HeightTransition;