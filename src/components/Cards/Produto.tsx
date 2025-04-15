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
        <div>
            <div>
                <Image 
                    width={100}
                    height={100}
                    alt="Imagem do Produto"
                    src={imagem}
                />
            </div>

            <div>
                <h1>{nome}</h1>
                <p>{descricao}</p>
                <span>R$ {preco}</span>
                <button onClick={() => alert({id})}>Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}