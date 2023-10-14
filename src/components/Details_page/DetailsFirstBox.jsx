const DetailsFirstBox = ({ children, firstParagraph, secondParagraph }) => {
    return (
        <div className="flex flex-col items-center pb-2 text-center rounded-md bg-white">
            {children}
            <p className="text-xs font-semibold mt-2 mb-1">{firstParagraph}</p>
            <p className="text-slate-500 text-xs">{secondParagraph}</p>
        </div>
    );
};
export default DetailsFirstBox;
