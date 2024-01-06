import ContactForm from "@/components/ContactForm";
import MotionDiv from "@/components/MotionDiv";
import React from "react";


function Page() {

	return (
		<MotionDiv
			className="w-full h-full flex"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}>
			<div className="flex flex-col justify-center h-full w-full text-white items-center">
				<ContactForm />
			</div>
		</MotionDiv>
	);
}

export default Page;
