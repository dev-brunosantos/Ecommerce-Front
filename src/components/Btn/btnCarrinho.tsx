"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

interface ProdutoInfor {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    imagem: string
}

export const BtnCarrinho = () => {

    const [itens, setItens] = useState(0)

    useEffect(() => {
        function buscaInforCarrinho() {
            const dados = localStorage.getItem('produtos')
            const produtos: ProdutoInfor[] = JSON.parse(dados || '[]')
            const quantidade = produtos.length
            setItens(quantidade)
        }

        buscaInforCarrinho()
    }, [itens])

    return (
        <button className="w-[70px] h-[50px] bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 ease-in-out relative">
            <Link href='/pages/carrinho'>
                <PiShoppingCartSimpleBold size={25} color="white" />
            </Link>
            <span className="absolute top-2 right-3">
                {itens}
            </span>
        </button>
    )
}