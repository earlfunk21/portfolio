"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Menu from "@/assets/menu.svg";
import XMark from "@/assets/xmark.svg";
import Image from "next/image";

type NavItem = {
	name: string;
	href: string;
};

type NavbarItemProps = {
	item: NavItem;
	isActive: boolean;
	setClose: (value: boolean) => void;
};

const NavbarItem: React.FC<NavbarItemProps> = React.memo(
	({ item, isActive, setClose }) => (
		<li
			className={`hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500 duration-[400ms,700ms] transition-[color,box-shadow] hover:border ${
				isActive ? "border" : ""
			} transition`}
			onClick={() => setClose(false)}>
			<Link
				href={item.href}
				className="flex flex-1 justify-end px-4">
				{item.name}
			</Link>
		</li>
	)
);

NavbarItem.displayName = "NavbarItem";

function Navbar() {
	const pathname = usePathname();
	const [isOpen, setOpen] = React.useState(false);

	return (
		<div
			className={`absolute min-h-screen w-full ${
				isOpen && "backdrop-blur-md z-20"
			}`}>
			{isOpen && (
				<div className="flex flex-col justify-center items-end fixed right-[4px] bottom-0 top-0">
					<ul className="text-white text-[40px]">
						{items.map((item) => (
							<NavbarItem
								key={item.href}
								item={item}
								isActive={item.href === pathname}
								setClose={setOpen}
							/>
						))}
					</ul>
				</div>
			)}

			<div className="hidden lg:flex flex-col justify-center items-end fixed right-[4px] bottom-0 top-0">
				<ul className="text-white text-[40px]">
					{items.map((item) => (
						<NavbarItem
							key={item.href}
							item={item}
							isActive={item.href === pathname}
							setClose={setOpen}
						/>
					))}
				</ul>
			</div>

			<div className="lg:hidden absolute top-0 right-0 z-50">
				<Image
					src={isOpen ? XMark : Menu}
					alt="Menu bar"
					className="w-12 m-4 z-50"
					onClick={() => setOpen(!isOpen)}
				/>
			</div>
		</div>
	);
}

export default Navbar;

const items: NavItem[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Skills",
		href: "/skills",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];
