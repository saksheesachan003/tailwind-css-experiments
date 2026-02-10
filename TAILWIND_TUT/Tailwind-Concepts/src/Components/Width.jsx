// if we put width grater than max-width, at that case he will take max-width

export const Width = () => {
  return (
    <>
      {/* span is flex so takes width as per text */}
      <span className="bg-pink-600">Span doen't take full width</span>

      {/* Width, max-width and min-width */}
      <h1 className="bg-pink-500">Width In Tailwind CSS</h1>

      <h1 className="bg-pink-400 max-w-50">Max-Width In Tailwind CSS</h1>

      <h1 className="bg-pink-300 min-w-100 w-20">Min-Width In Tailwind CSS</h1>

      {/*  Here will take maximum width value */}
      <h1 className="bg-pink-200 w-150 max-w-50">Width In Tailwind CSS</h1>

      {/* Takes full width */}
      <div className="bg-green-300 w-full">Full Width</div>

      {/* Takes half width as like we can give -> w-1/3, w-1/4*/}
      <div className="bg-green-400 w-1/2">Half Width</div>

      {/* can pass xs(350px), xl(576px), 2xl(672px) */}
      <div className="bg-yellow-200 w-xs">Small screen Width</div>

      {/* How to apply specific width(width -> 40px) */}
      <div className="bg-yellow-300 w-10 hover:w-xl m-3">Custom Width</div>
    </>
  );
};
