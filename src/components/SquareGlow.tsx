import React from "react";

function SquareGlow() {

	return (
		<div
			className="square fixed bottom-[-100px] animate-animate-rotate">
			<div className="relative w-full h-full">
				<div className="absolute inset-0 bg-blue-500 blur opacity-40"></div>
        <div className="absolute inset-1 bg-blue-500 blur-2xl"></div>
				<div className="relative bg-eerie w-full h-full"></div>
			</div>
		</div>
	);
}

export default SquareGlow;
