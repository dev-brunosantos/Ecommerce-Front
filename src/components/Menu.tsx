import Link from "next/link"

export const Menu = () => {
    return(
        <header className="w-full h-[70px]  bg-gray-900 text-white">
            <nav className="w-full max-w-[1500px] h-full m-auto flex items-center justify-between px-10">
                <div>
                    <Link href='/pages/home'>Loja</Link>
                </div>

                <ul className="w-[30%] h-full flex items-center justify-evenly text-center">
                    <li><Link href='/pages/home'>Home</Link></li>
                    <li><Link href='/pages/carrinho'>Carrinho</Link></li>
                    <li><Link href='/pages/contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}