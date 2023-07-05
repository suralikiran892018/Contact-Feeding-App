import React from "react";
const name1 ="Contact Page"
const Button = ({ text, onClick, width, variant }: any) => {
  return (
    <>
    
      {variant === "edit" ? (
        <button onClick={onClick} className="border-yellow-500 p-2 border text-base text-yellow-500 uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : variant === "delete" ? (
        <button onClick={onClick} className="border-red-400 p-2 border text-base text-red-400 hover:bg-red-100 uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`bg-cyan p-4 text-base font-medium text-white tracking-widest hover:bg-red-100 hover:text-black mt-16 hover:width-70px ${
            width ? width : "w-100"
          } uppercase `}
        >
          {text}
        </button>
        
      )}
    </>
  );
};

export default Button;
