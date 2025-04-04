import { useAppDispatch } from "@/app/_store/store";
import { showTC } from "@/app/_store/tcmodal";
import React from "react";

function Footer() {
  const dispatch = useAppDispatch();

  return (
    <div
      className="absolute bottom-2 left-24 sm:left-2 cursor-pointer text-sm text-bp-sec-400 hover:text-bp-sec-300 active:text-bp-sec-600 hover:underline"
      onClick={() => dispatch(showTC(true))}
    >
      <span>terms & condition</span>
    </div>
  );
}

export default Footer;
