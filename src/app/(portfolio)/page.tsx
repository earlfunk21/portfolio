"use client"

import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			className="w-full h-full flex"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}>
			<div className="flex flex-col justify-center flex-1 backdrop-blur leading-none md:leading-normal">
				<h1 className="text-[64px] text-white">Hi there !</h1>
				<h1 className="text-[64px] text-white">I'm Earl Nobe,</h1>
				<p className="text-white text-[32px] max-w-4xl">
					a passionate Full-stack developer. I have the ability to develop a
					user-friendly interfaces and building robust back-end solutions.
					Whether it’s coding or problem solving, I’m inspired by creativity and
					dedicated to providing impactful solutions. Let's work together and
					bring your ideas to life.
				</p>
			</div>
		</motion.div>
	);
}
