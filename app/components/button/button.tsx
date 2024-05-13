"use client";
import Link from "next/link";

function Button(props: string | any): React.JSX.Element | undefined {
  let tombol;
  function noOnClick() {
    console.log("NO ONCLICK");
  }

  switch (props.type) {
    case "primary":
      tombol = (
        <button
          className={`px-5 py-1.5 font-semibold block rounded-full bg-bp-pri-700 hover:bg-bp-pri-800 ${props.className}`}
          onClick={props.onClick ? props.onClick : noOnClick}
        >
          {props.isi}
        </button>
      );
      break;
    case "secondary":
      tombol = (
        <button
          className={`px-5 py-1.5 font-semibold block rounded-full bg-bp-pri-200 text-bp-pri-800`}
          onClick={props.onClick ? props.onClick : noOnClick}
        >
          {props.isi}
        </button>
      );
      break;
    case "elevated":
      tombol = (
        <button
          className={`px-5 py-1.5 font-semibold block rounded-full bg-bp-pri-50 text-bp-pri-600 shadow-sm shadow-bp-pri-200`}
          onClick={props.onClick ? props.onClick : noOnClick}
        >
          {props.isi}
        </button>
      );
      break;
    case "outline":
      tombol = (
        <button
          className={`px-5 py-1.5 font-semibold block rounded-full bg-transparent border border-bp-pri-100 text-bp-pri-50 shadow-md`}
          onClick={props.onClick ? props.onClick : noOnClick}
        >
          {props.isi}
        </button>
      );
      break;
  }

  if (props.href) {
    tombol = <Link href={props.href}>{tombol}</Link>;
  }

  return tombol;
}

export default Button;
