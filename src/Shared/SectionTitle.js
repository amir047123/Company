const SectionTitle = ({ highlights, title, des }) => {
    return (
        <>
            <h4 className="uppercase text-primary font-medium text-start">
                {highlights}
            </h4>
            <h2 className="text-4xl font-semibold text-start my-3">
                {title}
            </h2>
            <p className="opacity-50 text-sm text-start">
                {des}
            </p>
        </>
    )
}

export default SectionTitle;