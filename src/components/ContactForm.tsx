"use client";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";

type FormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};
	return (
		<form onSubmit={handleSubmit} className="w-full z-50 max-w-md">
			<div className="flex flex-col mb-4">
				<label
					htmlFor="name"
					className="text-2xl">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="bg-transparent border-b-2 focus:border-b-0 p-2 placeholder:text-gray-500 text-4xl italic"
					onChange={handleChange}
					autoComplete="off"
					value={formData.name}
					autoFocus
				/>
			</div>
			<div className="flex flex-col mb-4">
				<label
					htmlFor="email"
					className="text-2xl">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="bg-transparent border-b-2 focus:border-b-0 p-2 placeholder:text-gray-500 text-4xl italic"
					onChange={handleChange}
					autoComplete="off"
					value={formData.email}
				/>
			</div>
			<div className="flex flex-col mb-4">
				<label
					htmlFor="subject"
					className="text-2xl">
					Subject
				</label>
				<input
					type="text"
					name="subject"
					id="subject"
					className="bg-transparent border-b-2 focus:border-b-0 p-2 placeholder:text-gray-500 text-4xl italic"
					onChange={handleChange}
					autoComplete="off"
					value={formData.subject}
				/>
			</div>
			<div className="flex flex-col mb-4">
				<label
					htmlFor="Subject"
					className="text-2xl">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					required
					className="bg-transparent border-b-2 focus:border-b-0 p-2 placeholder:text-gray-500 text-2xl italic"
				/>
			</div>

			<div className="flex justify-end">
				<button
					type="submit"
					className="bg-white text-black flex items-center p-4 rounded-lg gap-x-4">
					Send
					<svg
						width="17"
						height="17"
						viewBox="0 0 17 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
							fill="black"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
}
