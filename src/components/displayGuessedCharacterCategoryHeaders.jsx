function DisplayGuessedCharacterCategoryHeaders() {
    const categoryHeaders = ['Character', 'Status', 'Gender', 'Tier', 'Introduced', 'Universe'];
    return <div className={'w-full flex gap-2 text-white text-xs my-2'}>
        {categoryHeaders.map((header) => (
            <span className="w-16 text-center border-b">
                {header}
            </span>
        ))}
    </div>;
}

export default DisplayGuessedCharacterCategoryHeaders;