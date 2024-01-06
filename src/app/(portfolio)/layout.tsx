import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SquareGlow from "@/components/SquareGlow";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen bg-eerie-500 flex">
			<div className="fixed w-full h-full blur-sm">
				{Array.from({ length: 10 }, (_, i) => (
					<SquareGlow key={i}/>
				))}
			</div>
			<div className="fixed w-full backdrop-blur z-20">
				<Image
					src="/logo.svg"
					width={56}
					height={68}
					alt="Earl Nobe Logo"
					className="select-none m-5"
				/>
			</div>
			<div className="container flex items-center justify-center lg:me-[100px] mt-[100px] w-full z-10">
				{children}
			</div>
			<Navbar />
		</main>
	);
}

export default Layout;
