import { ProdutoInfor } from "@/src/interfaces/IProduto"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface ProdutoCarrinho extends ProdutoInfor {
    itemCarrinho?: boolean
}

export const CardProduto = ({ id, nome, descricao, imagem, preco, itemCarrinho }:ProdutoCarrinho) => {

    const router = useRouter()
    
    function addProdutoCarrinho({ id, nome, descricao, imagem,preco }:ProdutoInfor) {
        const produto = { id, nome, descricao, preco, imagem }

        const produtos: ProdutoInfor[] = JSON.parse(localStorage.getItem('produtos') || '[]')
        
        produtos.push(produto)
        
        localStorage.setItem('produtos', JSON.stringify(produtos))
        alert('Produto adicionado ao carrinho')
    }

    function removerProdutoCarrinho(id: number) {
        const produtos: ProdutoInfor[] = JSON.parse(localStorage.getItem('produtos') || '[]')
        const produto = produtos.filter((prod: ProdutoInfor) => prod.id !== id)
        localStorage.setItem('produtos', JSON.stringify(produto))
        alert('Produto removido do carrinho')
        router.refresh()
    }

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
                {
                    !itemCarrinho ? (
                        <button onClick={() => { addProdutoCarrinho({id, nome, descricao, imagem, preco}) }}>Adicionar ao Carrinho</button>
                    ) : (
                        <button onClick={() => { removerProdutoCarrinho(id) }}>Remover do Carrinho</button>
                    )
                }
            </div>
        </div>
    )
}