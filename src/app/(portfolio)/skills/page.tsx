"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Html5Logo from "@/assets/logo/Html 5 1.svg";
import CSS3Logo from "@/assets/logo/CSS3 1.svg";
import TailwindCSSLogo from "@/assets/logo/Tailwindcss 1.svg";
import NextJSLogo from "@/assets/logo/Next.js 1.svg";
import ReactLogo from "@/assets/logo/React 1.svg";
import BootstrapLogo from "@/assets/logo/Bootstrap 1.svg";
import AngularJSLogo from "@/assets/logo/AngularJS 1.svg";
import ReactNativeLogo from "@/assets/logo/React Native_1 1.svg";
import SASSLogo from "@/assets/logo/Sass 1.svg";
import FlaskLogo from "@/assets/logo/Flask 1.svg";
import DjangoLogo from "@/assets/logo/Django 1.svg";
import SpringBootLogo from "@/assets/logo/Spring Boot 1.svg";
import PHPLogo from "@/assets/logo/PHP Logo 1.svg";
import NodeJSLogo from "@/assets/logo/Nodejs 1.svg";
import PythonLogo from "@/assets/logo/Python 1.svg";
import JavaLogo from "@/assets/logo/Java 1.svg";
import JavaScriptLogo from "@/assets/logo/JavaScript 1.svg";
import CplusplusLogo from "@/assets/logo/C++ 1.svg";
import CLogo from "@/assets/logo/C Programming 1.svg";
import TypeScriptLogo from "@/assets/logo/TypeScript 1.svg";
import DockerLogo from "@/assets/logo/Docker 1.svg";
import MySQLLogo from "@/assets/logo/MySQL Logo 1.svg";
import GitLogo from "@/assets/logo/Git 1.svg";


function Page() {
	return (
		<motion.div className="w-full h-full flex overflow-hidden">
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
								<Image
									alt="HTML5 Logo"
									src={Html5Logo}
								/>
								<Image
									alt="CSS3 Logo"
									src={CSS3Logo}
								/>
								<Image
									alt="TailwindCSS Logo"
									src={TailwindCSSLogo}
								/>
							</div>
							<div className="flex flex-row gap-x-2">
								<Image
									alt="NextJS Logo"
									src={NextJSLogo}
								/>
								<Image
									alt="React Logo"
									src={ReactLogo}
								/>
								<Image
									alt="Bootstrap Logo"
									src={BootstrapLogo}
								/>
							</div>
							<div className="flex flex-row gap-x-2">
								<Image
									alt="AngularJS Logo"
									src={AngularJSLogo}
								/>
								<Image
									alt="React Native Logo"
									src={ReactNativeLogo}
								/>
								<Image
									alt="Sass Logo"
									src={SASSLogo}
								/>
							</div>
						</div>
						<div className="border-s-2 max-w-[180px] ps-5">
							HTML, CSS, TailwindCSS, Bootstrap, React, NextJS, AngularJS, React
							Native, SASS
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
								<Image
									alt="Flask Logo"
									src={FlaskLogo}
								/>
								<Image
									alt="Django Logo"
									src={DjangoLogo}
								/>
								<Image
									alt="NextJS Logo"
									src={NextJSLogo}
								/>
							</div>
							<div className="flex flex-row gap-x-2">
								<Image
									alt="SpringBoot Logo"
									src={SpringBootLogo}
								/>
								<Image
									alt="PHP Logo"
									src={PHPLogo}
								/>
								<Image
									alt="NodeJS Logo"
									src={NodeJSLogo}
								/>
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
								<Image
									alt="Python Logo"
									src={PythonLogo}
								/>
                <Image
									alt="Java Logo"
									src={JavaLogo}
								/>
                <Image
									alt="JavaScript Logo"
									src={JavaScriptLogo}
								/>
							</div>
							<div className="flex flex-row gap-x-2">
              <Image
									alt="C++ Logo"
									src={CplusplusLogo}
								/>
                <Image
									alt="C Logo"
									src={CLogo}
								/>
                <Image
									alt="PHP Logo"
									src={PHPLogo}
								/>
							</div>
							<div className="flex flex-row gap-x-2">
              <Image
									alt="TypeScript Logo"
									src={TypeScriptLogo}
								/>
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
            <Image
									alt="Docker Logo"
									src={DockerLogo}
								/>
                <Image
									alt="My Logo"
									src={MySQLLogo}
								/>
                <Image
									alt="Git Logo"
									src={GitLogo}
								/>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default Page;
