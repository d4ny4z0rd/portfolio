import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Socials = () => {
	return (
		<div className="flex flex-row gap-10 my-10">
			<div className="flex flex-row  gap-2">
				<p className="text-xl my-4 text-blue-500">Github</p>
				<Link
					href={"https://github.com/d4ny4z0rd"}
					target="_blank"
					className="py-4">
					<BsArrowUpRightSquare
						size={30}
						className="hover:-translate-y-1 transition-transform cursor-pointer"
					/>
				</Link>
			</div>
			<div className="flex flex-row  gap-2">
				<p className="text-xl my-4 text-blue-500">Leetcode</p>
				<Link
					href={"https://leetcode.com/prabhavdixit/"}
					target="_blank"
					className="py-4">
					<BsArrowUpRightSquare
						size={30}
						className="hover:-translate-y-1 transition-transform cursor-pointer"
					/>
				</Link>
			</div>
			<div className="flex flex-row gap-2">
				<p className="text-xl my-4 text-blue-500">Linkedin</p>
				<Link
					href={"https://www.linkedin.com/in/prabhav-dixit-779a15274/"}
					target="_blank"
					className="py-4">
					<BsArrowUpRightSquare
						size={30}
						className="hover:-translate-y-1 transition-transform cursor-pointer"
					/>
				</Link>
			</div>
			<div className="flex flex-row gap-2">
				<p className="text-xl my-4 text-blue-500">Blog</p>
				<Link
					href={"https://haveabyte.vercel.app"}
					target="_blank"
					className="py-4">
					<BsArrowUpRightSquare
						size={30}
						className="hover:-translate-y-1 transition-transform cursor-pointer"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Socials;
