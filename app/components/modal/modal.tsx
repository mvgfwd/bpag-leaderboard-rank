import { useAppDispatch } from "@/app/_store/store";
import { showTC } from "@/app/_store/tcmodal";
import React from "react";

function Modal(props: {
  title: string;
  content: JSX.Element;
  contentStyle?: string;
  backdropStyle?: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`absolute top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center `}
    >
      <div
        className={`absolute h-[100vh] w-[100vw] z-20 bg-bp-sec-500 bg-opacity-60 ${props.backdropStyle}`}
        onClick={() => dispatch(showTC(false))}
      ></div>
      <div
        className={`relative z-30 h-[55vh] w-[80vw] rounded-lg px-4 py-2 bg-bp-pri-600 ${props.contentStyle}`}
      >
        <div className="h-[5vh]">
          <span className="flex items-center justify-center text-xl font-eczar font-semibold">
            {props.title}
          </span>
          <span
            className="absolute top-4 right-4 text-xl"
            onClick={() => dispatch(showTC(false))}
          >
            ❌
          </span>
        </div>
        <div className="flex h-[90%] overflow-auto font-ibm bg-bp-pri-700 p-1.5 bg-opacity-60 rounded-xl">
          <span className="">{props.content}</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
