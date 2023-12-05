import { useEffect, useRef } from "react";

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };

  }, [ref]);
}

function OutsideClick(props) {
  const wrapper = useRef(null);
  useOutsideClick(wrapper, props.onClick);

  return <div ref={wrapper}>{props.children}</div>;
}

export default OutsideClick;
