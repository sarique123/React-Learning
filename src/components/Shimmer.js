const Shimmer = () => {
    const shimmerCards = new Array(15).fill(null); // Create an array with 15 elements

    return (
        <div className="shimmer-container">
            {shimmerCards.map((index) => (
                <div className="shimmer-card" key={index}>
                    <div className="shimmer-image"></div>
                    <div className="shimmer-name"></div>
                    <div className="shimmer-address"></div>
                    <div className="shimmer-rating"></div>
                    <div className="shimmer-rating"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;
