"use client"

import { CardProduto } from "@/src/components/Cards/Produto";
import { useEffect, useState } from "react";

interface ProdutoInfor {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    imagem: string
}


export default function Carrinho() {

    const dados = JSON.parse(localStorage.getItem('produtos') || '[]')

    return (
        <div className="w-full h-full flex flex-col items-center justify-evenly bg-gray-900 text-white">

            <h1 className="text-3xl font-bold text-center">Produtos</h1>

            <div className="w-[90%] max-w-[1500px] h-[100%] m-auto flex flex-wrap items-center justify-center gap-4 mt-10 mb-10">
                {
                    dados.map((prod: ProdutoInfor) => (
                        <CardProduto
                            key={prod.id}
                            id={parseInt(JSON.stringify(prod.id))}
                            nome={prod.nome}
                            descricao={prod.descricao}
                            imagem={prod.imagem}
                            preco={prod.preco}
                        />
                    ))
                }
            </div>

        </div>
    );
}
