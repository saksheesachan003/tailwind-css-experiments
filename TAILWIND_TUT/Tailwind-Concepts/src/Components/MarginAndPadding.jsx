export const MarginAndPadding = () => {
  return (
    <>
    {/* Margin and Padding With span -> by default is flex so that's why margin top not works so do "block" */}
      <span className="bg-emerald-500 ml-10 mt-10 block">Span With Margin and padding</span>

      {/* Apply margin-top and padding 1px */}
      <h2 className="bg-cyan-500 text-2xl p-px mt-px">Heading with 1px margin and padding</h2>

      <h1 className="bg-red-950 text-amber-50 p-5 m-5">Heading Tag 1</h1>

      {/* Gives padding and margin right and left side (horizontally) */}
      <h1 className="bg-red-900 text-amber-50 px-20 mx-2">Heading Tag 1</h1>

      {/* Gives padding and margin top and bottom side (Vertically) */}
      <h1 className="bg-red-800 text-amber-50 py-7 my-2 ">Heading Tag 1</h1>

      {/* How to apply single side margin and padding (Top Side) */}
      <h1 className="bg-red-700 text-amber-50 pt-5 mt-5">Heading Tag 1</h1>

      {/* Left side padding and margin */}
      <h1 className="bg-red-600 text-amber-50 pl-5 ml-5">Heading Tag 1</h1>

      {/* Right side padding and margin */}
      <h1 className="bg-red-500 text-amber-50 pr-5 mr-5  text-right">
        Heading Tag 1
      </h1>
    </>
  );
};
