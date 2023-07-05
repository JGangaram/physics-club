import Link from "next/link";
import navLinks from "@/data/navLinks";

export default function NavBar() {

    return (
        <nav className="flex items-center">
            <div className="ml-2">physics-club-logo</div>
            <ul className="flex">
                {navLinks.map((item, id) => (
                    <li
                        className="p-4"
                        key={id}
                    >
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}



