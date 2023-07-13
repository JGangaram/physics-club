import Link from "next/link";
import navLinks from "@/data/navLinks";

export default function NavBar() {

    return (
        <nav className="flex justify-center items-center">

            <div className="w-full max-w-3xl flex justify-between">
                <div className="ml-2 flex items-center">
                    <Link href="/">
                        physics-club-logo
                    </Link>
                </div>

                <ul className="flex">
                    {navLinks.map((item, id) => (
                        <li
                            className="p-4 transition ease-in-out delay-100 hover:text-red-300 duration-100"
                            key={id}
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}



