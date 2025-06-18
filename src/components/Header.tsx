import { Link } from "react-router";

export function Header() {
    return (
        <header className="flex justify-between items-center p-8 bg-gray-50 shadow-md">
            <Link to="/" className="w-32">
                <img src="./src/assets/logo.png" alt="SEJUSC" />
            </Link>

            <nav className="flex gap-6 *:text-gray-800 *:font-semibold *:tracking-wider *:text-2xl *:p-2">
                <Link to="/fila" className="relative
        after:absolute after:bottom-0 after:left-0
         after:h-0.5 after:w-full after:bg-blue-800
         after:origin-left after:scale-x-0 hover:after:scale-x-100
         after:transition-transform after:duration-200 after:ease-in">
                    Fila
                </Link>
                <Link className="relative
        after:absolute after:bottom-0 after:left-0
         after:h-0.5 after:w-full after:bg-blue-800
         after:origin-left after:scale-x-0 hover:after:scale-x-100
         after:transition-transform after:duration-200 after:ease-in" to="/">
                    Acesso
                </Link>
            </nav>
        </header>
    )
}