"use client";
import { motion } from "framer-motion";
import React from "react";

function Page() {
	return (
		<motion.div
			className="w-full h-full flex overflow-hidden">
			<div className="flex flex-col justify-center h-full w-full text-white">
				<h1 className="text-[64px] text-white font-bold">My Skills</h1>
				<div className="w-full h-full flex flex-col md:flex-row gap-5 py-5 overflow-hidden">
					<motion.div
						className="flex flex-col border-2 flex-1 backdrop-blur items-center py-5 justify-between gap-5"
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}>
						<h1 className="underline text-4xl">Front-end</h1>
						<div className="flex flex-col gap-y-2 flex-1">
							<div className="flex flex-row gap-x-2">
								<img src="/logo/Html 5 1.svg" />
								<img src="/logo/CSS3 1.svg" />
								<img src="/logo/Tailwindcss 1.svg" />
							</div>
							<div className="flex flex-row gap-x-2">
								<img src="/logo/Next.js 1.svg" />
								<img src="/logo/React 1.svg" />
								<img src="/logo/Bootstrap 1.svg" />
							</div>
							<div className="flex flex-row gap-x-2">
								<img src="/logo/AngularJS 1.svg"/>
								<img src="/logo/React Native_1 1.svg" />
								<img src="/logo/Sass 1.svg" />
							</div>
						</div>
						<div className="border-s-2 max-w-[180px] ps-5">
							HTML, CSS, TailwindCSS, Bootstrap, React, NextJS, AngularJS,
							React Native, SASS
						</div>
					</motion.div>
					<motion.div
						className="flex flex-col border-2 flex-1 backdrop-blur items-center py-5 justify-between gap-5"
						initial={{ y: "200%" }}
						animate={{ y: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}>
						<h1 className="underline text-4xl">Back-end</h1>
						<div className="flex flex-col gap-y-2 flex-1">
							<div className="flex flex-row gap-x-2">
								<img src="/logo/Flask 1.svg" />
								<img src="/logo/Django 1.svg" />
								<img src="/logo/Next.js 1.svg" />
							</div>
							<div className="flex flex-row gap-x-2">
								<img src="/logo/Spring Boot 1.svg" />
								<img src="/logo/PHP Logo 1.svg" />
								<img src="/logo/NodeJs 1.svg" />
							</div>
						</div>
						<div className="border-s-2 max-w-[180px] ps-5">
							Flask, Django, Next.js, Spring Boot, PHP, NodeJS
						</div>
					</motion.div>
					<motion.div
						className="flex flex-col border-2 flex-1 backdrop-blur items-center py-5 justify-between gap-5"
						initial={{ x: "200%" }}
						animate={{ x: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}>
						<h1 className="underline text-4xl">
							Programming <div className="break text-center">Languages</div>
						</h1>
						<div className="flex flex-col gap-y-2 flex-1">
							<div className="flex flex-row gap-x-2">
								<img src="/logo/Python 1.svg" />
								<img src="/logo/Java 1.svg" />
								<img src="/logo/JavaScript 1.svg" />
							</div>
							<div className="flex flex-row gap-x-2">
								<img src="/logo/C++ 1.svg" />
								<img src="/logo/C Programming 1.svg" />
								<img src="/logo/PHP Logo 1.svg" />
							</div>
							<div className="flex flex-row gap-x-2">
								<img src="/logo/TypeScript 1.svg" />
							</div>
						</div>
						<div className="border-s-2 max-w-[180px] ps-5">
							Python, Java, Javascript, C++, C, PHP, Typscript
						</div>
					</motion.div>
				</div>

				<motion.div
					className="flex flex-col border-2 flex-1 backdrop-blur p-5 justify-between"
					initial={{ y: "200%" }}
					animate={{ y: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}>
					<h1 className="underline text-4xl mb-5">Others: </h1>
					<div className="flex flex-col gap-y-2 flex-1">
						<div className="flex flex-row gap-x-2">
							<img src="/logo/Docker 1.svg" />
							<img src="/logo/MySQL Logo 1.svg" />
							<img src="/logo/Git 1.svg" />
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default Page;
