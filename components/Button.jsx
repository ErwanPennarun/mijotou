const Button = ({ link, text }) => {
  return (
    <>
      <div className="text-center mx-auto my-8">
        <a href={link}>
          <button className="inline-block p-0 bg-[#91121d] text-white border-none rounded-t-xl cursor-pointer group">
            <span className="block py-3 px-6 bg-main-red translate-y-[-8px] duration-300 rounded-t-xl ease-in-out group-hover:translate-y-[-2px] ">
              {text}
            </span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Button;
