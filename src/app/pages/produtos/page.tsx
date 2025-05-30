"use client"

import { CardProduto } from "@/src/components/Cards/Produto";
import { useEffect, useState } from "react";

// IMPORTAÇÃO DE INTERFACES
import { ProdutoApi } from "@/src/interfaces/IProduto";


export default function Produtos() {

    const [dados, setDados] = useState<ProdutoApi[]>([])

    useEffect(() => {
        function api() {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setDados(data)
                })
        }

        api()
    }, [])

    return (
        <div className="w-full h-full flex flex-col items-center justify-evenly bg-gray-900 text-white">

            <h1 className="text-3xl font-bold text-center">Produtos</h1>

            <div className="w-[90%] max-w-[1500px] h-[100%] m-auto flex flex-wrap items-center justify-center gap-4 mt-10 mb-10">
                {
                    dados.map((prod: ProdutoApi) => (
                        <CardProduto
                            key={prod.id}
                            id={parseInt(JSON.stringify(prod.id))}
                            nome={prod.title}
                            descricao={prod.description}
                            imagem={prod.image}
                            preco={prod.price}
                        />
                    ))
                }
            </div>

        </div>
    );
}
