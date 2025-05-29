function ComparisonCell({value, isCorrect}) {
    return (
        <div
            className={`flex items-center justify-center w-16 h-16 text-white border-2 ${isCorrect ? "bg-green-500" : "bg-red-500"} `}>
            <div className={'text-xs text-center'}>
                {value}
            </div>
        </div>
    );
}
export default ComparisonCell;