const Spinner = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    )
}

export default Spinner