import { useAppDispatch } from "@/app/_store/store";
import { showTC } from "@/app/_store/tcmodal";
import React from "react";

function Footer() {
  const dispatch = useAppDispatch();

  return (
    <div
      className="absolute bottom-2 left-16 cursor-pointer sm:left-2 text-sm text-bp-sec-400 underline"
      onClick={() => dispatch(showTC(true))}
    >
      <span>terms & condition</span>
    </div>
  );
}

export default Footer;
