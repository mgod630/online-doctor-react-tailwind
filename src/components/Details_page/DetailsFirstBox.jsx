const DetailsFirstBox = ({ children, firstParagraph, secondParagraph }) => {
    return (
        <div className="flex flex-col items-center pb-2 text-center rounded-md bg-white">
            {children}
            <p
                className="text-sm font-semibold mt-2 mb-1"
                style={{ direction: "rtl" }}
            >
                {firstParagraph}
            </p>
            <p className="text-slate-400 text-xs font-semibold">
                {secondParagraph}
            </p>
        </div>
    );
};
export default DetailsFirstBox;
