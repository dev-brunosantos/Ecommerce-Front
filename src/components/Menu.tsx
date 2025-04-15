import Link from "next/link"

export const Menu = () => {
    return(
        <header>
            <nav>
                <div>
                    <Link href='/pages/home'>Loja</Link>
                </div>

                <ul>
                    <li><Link href='/pages/home'>Home</Link></li>
                    <li><Link href='/pages/carrinho'>Carrinho</Link></li>
                    <li><Link href='/pages/contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}