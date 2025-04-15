"use client"

import { CardProduto } from "@/src/components/Cards/Produto";
import { useEffect, useState } from "react";

interface ProdutoApi {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string
}


export default function Home() {

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {
        dados.map((prod: ProdutoApi) => (
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.title}
            descricao={prod.description}
            imagem={prod.image}
            preco={prod.price}
          />
        ))
      }

    </div>
  );
}
