import classNames from "classnames";

const Image = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classNames("w-10 h-10 rounded-full mx-3", className)}
        />
    );
};

export default Image;
