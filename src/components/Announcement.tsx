function Announcement()
{
  return (
      <div className="flex flex-col justify-center items-center text-center mt-20">
        <h1 className="font-bold text-2xl sm:text-4xl text-white">
          30% Off Your Order When You Spend $140+
        </h1>
        <p className="sm:font-bold sm:text-md text-sm text-white mt-4">
          Discount automatically applied at checkout
        </p>
      </div>
  );
}

export default Announcement;