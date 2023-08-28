import Image from "next/image";

import HeaderBanner from "@/components/header/HeaderBanner";

export default function About() {
    return (
        <>
            <HeaderBanner title="#SobreNós" text="Descubra mais sobre nós e nossa loja" />

            <section className="section-p1 flex text-center">
                <div className="flex flex-col justify-between">
                    <h1>Quem somos?</h1>
                    <p>A empresa Cantinho da Moda é uma loja de moda focada em vender roupas e acessórios para mulheres de diversos gostos e necessidades. A Cantinho da Moda está sempre atualizada com as últimas tendências da moda, garantindo que nossos clientes estejam sempre elegantes.</p>
                    <p>Além disso, nos orgulhamos de oferecer roupas e acessórios de alta qualidade. Então, se você está procurando uma loja de moda confiável e de alta qualidade, não procure mais do que a Cantinho da Moda. Venha nos visitar e veja por si mesmo tudo o que temos a oferecer!</p>
                </div>
                <Image src="/images/banners/b9.png" width={400} height={400} alt="" />
            </section>

            <section id="perguntas-frequentes" className="section-p1 d-flex flex-column">
                <h2>Perguntas frequentes</h2>

                <div className="container row justify-content-center">
                    <div className="box d-flex flex-column justify-content-between">
                        <h3>Por que não consigo comprar produtos?</h3>
                        <div className="conteudo">
                            <p>Este site possui o objetivo de expor os itens no catálogo da loja Cantinho da Moda. Caso esteja a fim de realizar a compra de produtos, dirija-se até a nossa loja física.</p>
                        </div>

                        <p>Caso necessário, entre na página de <a href="/contato">contato</a>.</p>
                    </div>
                    
                    <div className="box d-flex flex-column justify-content-between">
                        <h3>Que tipos de produtos são vendidos?</h3>
                        <div className="conteudo">
                            <p>Na Cantinho da Moda vendemos desde roupas de verão até roupas de inverno. Além disso, também vendemos alguns acessórios, como bolsas, brincos e colares.</p>
                        </div>
                        <p>Vá para a nossa página e aproveite: <a href="/catalogo">catálogo</a>.</p>
                    </div>

                    <div className="box d-flex flex-column justify-content-between">
                        <h3>Como faço para utilizar a página "catálogo"?</h3>
                        <div className="conteudo">
                            <p>Basta alterar as personalizações de pesquisa, localizadas a esquerda da página, através das categorias e ordens de visualização entre preços  de produtos.</p>
                        </div>
                        <p>Vá agora e teste novos produtos: <a href="/catalogo">catálogo</a>.</p>
                    </div>

                    <div className="box d-flex flex-column justify-content-between">
                        <h3>Quais são os métodos de pagamento?</h3>
                        <div className="conteudo">
                            <p>Ao visitar nossa loja física aceitamos cartões de débito e crédito da Visa, Mastercard, Elo e Cabal. Ademais, também aceitamos pagamento por Pix e Banri Compras</p>
                        </div>
                        <p>Caso tenha dúvidas, visite a página de <a href="/contato">contato</a>.</p>
                    </div>

                </div>
            </section>
        </>
    )
}