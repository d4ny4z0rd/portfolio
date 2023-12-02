import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./slide-up";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "The todo app - Todoiee",
		description:
			"Meet Todoiee, your go-to app for seamless task management. Prioritize, organize, and conquer your todos with its intuitive interface and smart features, all in the palm of your hand.",
		image: "/todoiee.png",
		github: "https://github.com/prabhavdixit/todoieeapp",
		link: "https://todoiee.vercel.app",
	},
	{
		name: "Tech article app - haveabyte",
		description:
			"Stay on the pulse of tech with 'Haveabyte' – your go-to web app for instant updates on the latest in technology. From cutting-edge innovations to breaking news, Haveabyte delivers bite-sized tech updates with a user-friendly interface. Elevate your tech news experience with Haveabyte, where staying informed has never been more accessible.",
		image: "/haveabyte.png",
		github: "https://github.com/prabhavdixit/article-app",
		link: "https://haveabyte.vercel.app",
	},
	{
		name: "Bitter - social media",
		description:
			"Discover a new flavor of social connection with 'Bitter,' a refreshing social media project that adds a touch of authenticity to your online interactions. Join Bitter and savor the true essence of meaningful connections in a world of digital sweetness.",
		image: "/bitter.png",
		github: "https://github.com/prabhavdixit/bitter",
		link: "https://boringbitter.vercel.app",
	},
	{
		name: "Brainote",
		description:
			"Introducing Draco, your smart companion for note-taking. This cutting-edge app merges intuitive design with advanced AI, creating a dynamic and personalized experience. Welcome to a future where organization meets innovation, all at your fingertips with Draco.",
		image: "/brainote.png",
		github: "https://github.com/prabhavdixit/brainote-final",
		link: "https://brainote.vercel.app",
	},
	{
		name: "Saltman",
		description:
			"Elevate your business strategy with 'Saltman,' a cutting-edge SaaS AI platform. Unlock unparalleled insights and efficiency, empowering your team to navigate the complexities of the digital landscape effortlessly.",
		image: "/saltman.png",
		github: "https://github.com/prabhavdixit/saltman",
		link: "https://saltman.vercel.app",
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
			</h1>

			<div className="flex flex-col space-y-28">
				{projects.map((project, idx) => {
					return (
						<div key={idx}>
							<SlideUp offset="-300px 0px -300px 0px">
								<div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={project.link}>
											<Image
												src={project.image}
												alt=""
												width={1000}
												height={1000}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className="mt-8 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{project.description}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link href={project.github} target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link href={project.link} target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
