export const Height = () => {
    return (
        <div className="h-screen">
            {/* By default is height fix, we can give height */}
            <div className="bg-rose-400">Height In Tailwind css</div>

            <div className="bg-rose-300 h-10">Height In Tailwind css</div>

            {/* Gives full height -> for that give in parent div h-screen and then in child give h-full */}
            {/* <div className="bg-rose-300 h-full">Height In Tailwind css</div> */}

            {/* half, and one thrid, one fourth height */}
            {/* <div className="bg-rose-500 h-1/8">Height In Tailwind css</div> */}

            {/* Gives max-height */}
            {/* <div className="bg-rose-500 h-10 max-h-20">Max Height In Tailwind css</div> */}

        </div>
    );
};
