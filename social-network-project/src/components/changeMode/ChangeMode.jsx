import { useContext } from "react";
import { Context } from "../../context/Context";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ChangeMode = () => {
  const context = useContext(Context);

  const changeTheme = () => {
    context.setClearTheme(!context.clearTheme);
  };

  return (
    <button
      className={`text-2xl ${context.clearTheme ? "text-black" : "text-red"}`}
      onClick={changeTheme}
    >
      {context.clearTheme ? (
        <div className="border-2 border-black rounded-full p-2 flex justify-center items-center w-12 h-12">
          <MoonIcon />
        </div>
      ) : (
        <SunIcon className="w-8 h-8" />
      )}
    </button>
  );
};

export default ChangeMode;
