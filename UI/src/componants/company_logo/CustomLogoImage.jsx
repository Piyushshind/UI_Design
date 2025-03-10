import React from 'react'

const CustomLogoImage = (props) => {
    const { src, className, alt } = props;
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={className}
            />
        </>
    )
}

export default CustomLogoImage;