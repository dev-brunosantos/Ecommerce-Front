import Image from "next/image"

interface ProdutoInfor {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    imagem: string
}

export const CardProduto = ({ id, nome, descricao, imagem, preco }:ProdutoInfor) => {
    return(
        <div className="w-[250px] h-[320px] mt-2 mb-2 border-2 border-white rounded-2xl flex flex-col items-center justify-evenly gap-2 bg-white">
            <div>
                <Image 
                    width={120}
                    height={100}
                    alt="Imagem do Produto"
                    src={imagem}

                    onClick={() => alert(descricao)}
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-center text-gray-900">
                <h1 className="font-bold">{nome}</h1>
                {/* <p>{descricao}</p> */}
                <span>R$ {preco}</span>
                <button onClick={() => alert(id)}>Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}