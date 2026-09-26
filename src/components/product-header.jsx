import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./button";
const navLinks = ["Home", "About", "Tech Stack", "Experience", "Contact"];

export default function ProductHeader() {
  const [active, setActive] = useState("Home");
  return (
	<>
	<header className="bg-[var(--brand-black)] p-6 ">
		<nav className="max-w-7xl mx-auto flex items-center justify-between">
			<div className="product-header-logo cursor-pointer">
			<img src="/src/assets/product-logo.svg" alt="Dev Logo" className="h-8 md:h-10 w-auto" />
			</div>
			<div className="flex items-center gap-8">
			<ul className="hidden md:flex items-center gap-1 p-0 list-none">
				{navLinks.map((link) => (
				<motion.li key={link} className="relative" animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
					<button onClick={() => setActive(link)}
					className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${ active === link ? "text-white font-semibold" : "text-[#848484] hover:text-white" }`}
					>
					{active === link && (
						<motion.div
						layoutId="nav-pill"
						className="absolute inset-0 bg-[var(--brand-nav-pill-bg)] rounded-xl z-0"
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						/>
					)}
					<span className="relative z-10">{link}</span>
					</button>
				</motion.li>
				))}
			</ul>
			<Button  
			   className="flex items-center gap-2 bg-[var(--brand-white)] text-black px-5 py-2.5 rounded-full transition-colors text-sm font-medium" 
			   primary={true} onClick={() => {}} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
			>
			Resume
			 </Button>
			</div>
		</nav>
		</header>
	</>
  );
}