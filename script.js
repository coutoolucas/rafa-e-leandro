const giftItems = [
    {
        "nome": "Presente em Dinheiro (Qualquer Valor via PIX)",
        "url": "#pix",
        "imagem": "pix", // Special identifier
        "isPix": true
    },
    {
        "nome": "Secadora de Roupas de Parede Fischer 8kg",
        "url": "https://m.magazineluiza.com.br/secadora-de-roupas-de-parede-fischer-8kg-super-ciclo/p/011691300/ed/selt/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/1500x1500/secadora-de-roupas-de-parede-fischer-8kg-super-ciclo/magazineluiza/011691300/cbca0dc5d1738ccb992207a85d3a733f.jpg"
    },
    {
        "nome": "Depurador E Exaustor De Ar Suggar Slim 60cm 3 Velocidades Preto",
        "url": "https://m.magazineluiza.com.br/depurador-e-exaustor-de-ar-suggar-slim-60cm-3-velocidades-preto/p/adjjeh7dd4/ed/depu/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://m.magazineluiza.com.br/a-static/420x420/depurador-e-exaustor-de-ar-suggar-slim-60cm-3-velocidades-preto/techshop/depsug00030/1ed2c646bbf7bc06d2028b2038657ae2.jpg"
    },
    {
        "nome": "Panela Elétrica de Pressão Philco PPP01P - 6 Litros, Painel Digital, com 13 Funções, Preto",
        "url": "https://m.magazineluiza.com.br/panela-eletrica-de-pressao-philco-ppp01p-6-litros-painel-digital-com-13-funcoes-preto/p/eg63h71571/ep/eppe/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/470x352/panela-eletrica-de-pressao-philco-ppp01p-6-litros-painel-digital-com-13-funcoes-preto/efacil/210312-89/06a46dbd9b11e24ec3cdc113f87d1073.jpg"
    },
    {
        "nome": "Air Fryer Mondial Forno Oven AFON-12L-BI Preto e Inox 12L",
        "url": "https://m.magazineluiza.com.br/air-fryer-mondial-forno-oven-afon-12l-bi-preto-e-inox-12l/p/237219400/ep/efso/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/800x600/air-fryer-mondial-forno-oven-afon-12l-bi-preto-e-inox-12l/magazineluiza/237219400/a3445e6e8b6f4199b925f2c6a2040e0b.jpg"
    },
    {
        "nome": "Conjunto De Panelas Sartin Champagne 7 Peças Cerâmica Mimo Style",
        "url": "https://m.magazineluiza.com.br/conjunto-de-panelas-sartin-champagne-7-pecas-ceramica-mimo-style/p/chgd23ba6d/ud/cjpn/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/420x420/jogo-de-panelas-com-7-pecas-mimo-style-sartin-cook-champanhe/inpowermg/nac015956/8b18e9b4ba293adbdef19096a6f7514b.jpeg"
    },
    {
        "nome": "Lava-Louças Brastemp 8 Serviços Branca BLF08BB",
        "url": "https://m.magazineluiza.com.br/lava-loucas-brastemp-8-servicos-branca-blf08bb/p/af04hfbe27/ed/l08s/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://m.magazineluiza.com.br/a-static/420x420/lava-loucas-8-servicos-brastemp-branca-blf08bb/whirlpool/326031199/b236ce3d97ab80b272f42430c052081d.jpg"
    },
    {
        "nome": "Armário de Cozinha Completa Suspenso 300cm Cinza Nice Madesa 07",
        "url": "https://m.magazineluiza.com.br/armario-de-cozinha-completa-suspenso-300cm-cinza-nice-madesa-07/p/ec6816f974/mo/mcoz/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/450pxx450px/armario-de-cozinha-completa-suspenso-300cm-cinza-nice-madesa-07/madesamoveis/grnc3000073b/92e42e6616dae09977b9ec1d9c41a12f.jpeg"
    },
    {
        "nome": "Multiprocessador Moedor Carne E Alimentos Elétrico 220V",
        "url": "https://m.magazineluiza.com.br/multiprocessador-moedor-carne-e-alimentos-eletrico-220v-3l-moedor-220v/p/abe696df5h/ep/prsa/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/470x352/multiprocessador-moedor-carne-e-alimentos-eletrico-220v-3l-moedor-220v/lojamixpromo2024/220vnovomoedor2/30d2773f71b6ee115a9691162e0c9c5e.jpeg"
    },
    {
        "nome": "Grill Elétrica Redondo Antiaderente Startools 1200W",
        "url": "https://m.magazineluiza.com.br/grill-eletrica-redondo-antiaderente-com-termostato-sem-fumaca-churrasqueira-ideal-para-cozinhas-e-varandas-40cm-grelha-255-cm-potencia-1200w-startools/p/gd5bca19jd/ep/epgr/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/450pxx450px/grill-eletrica-redondo-antiaderente-com-termostato-sem-fumaca-churrasqueira-ideal-para-cozinhas-e-varandas-40cm-grelha-255-cm-potencia-1200w-startools/mcfvendasoficial/ar1001/0f93c4c0675612a8eae947608c868f22.jpeg"
    },
    {
        "nome": "Forno Elétrico Fischer Pop Grill de Bancada 44L",
        "url": "https://m.magazineluiza.com.br/forno-eletrico-fischer-pop-grill-de-bancada-44l/p/aee8c95g3j/ed/frne/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/800x600/forno-eletrico-pop-grill-de-bancada-44l-fischer/homesupreme/8409/59421262d6599a3ccf102448bf12a3c4.jpg"
    },
    {
        "nome": "Pipoqueira Elétrica Mondial Popflix PP-04",
        "url": "https://m.magazineluiza.com.br/pipoqueira-eletrica-mondial-popflix-pp-04-1200w/p/236682800/ep/pipo/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/420x420/pipoqueira-eletrica-mondial-popflix-pp-04-1200w-220v-branco/tictacrelogiosecia/3213214/6c5baf3d0af357fe87ec82848122bf96.jpeg"
    },
    {
        "nome": "Colchão Casal Strong Pillow Top Espuma D45 138x188x24cm",
        "url": "https://m.magazineluiza.com.br/colchao-casal-strong-pillow-top-espuma-d45-138x188x24cm-bege-suporta-ate-150kg-por-pessoa-hellen/p/ec66k2b616/co/ccbc/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://imgs.pontofrio.com.br/1549343463/1xg.jpg?imwidth=500"
    },
    {
        "nome": "Cobre Leito Casal Padrão 200 Fios Avere 03 Peças",
        "url": "https://m.magazineluiza.com.br/cobre-leito-casal-padrao-200-fios-avere-03-pecas-borboletas-bia-enxovais/p/abkgjc1g67/cm/kenx/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/800x800/cobre-leito-casal-padrao-200-fios-avere-03-pecas-borboletas-bia-enxovais/ravatexcasa/1004678/51b68a93fd64b1289c765417d4f5bbbd.jpeg"
    },
    {
        "nome": "Kit Jogo 6 Pratos Fundos Biona Folk em Cerâmica Decorada",
        "url": "https://m.magazineluiza.com.br/kit-jogo-6-pratos-fundos-biona-folk-em-ceramica-decorada-215-cm-oxford/p/fjdkfc24cj/ud/pfsp/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/470x352/kit-jogo-6-pratos-fundos-biona-folk-em-ceramica-decorada-215-cm-oxford/decaelo/61386-6/9850b8ca90102c7d4f5f445e4af02e90.jpeg"
    },
    {
        "nome": "Cafeteira Expresso Arno Nescafé Dolce Gusto Genio S Basic",
        "url": "https://m.magazineluiza.com.br/cafeteira-expresso-arno-nescafe-dolce-gusto-genio-s-basic-de-capsula-15-bar-branco/p/023518000/ep/cadc/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/470x352/cafeteira-expresso-arno-nescafe-dolce-gusto-genio-s-basic-de-capsula-15-bar-branco/magazineluiza/023518000/f2b9faab15e067fb216ee0ede44dc8e3.jpg"
    },
    {
        "nome": "Filtro De Agua Natural Purificador De Agua Karina",
        "url": "https://m.magazineluiza.com.br/filtro-de-agua-natural-cinza-purificador-de-agua-karina-bebedouros/p/ec54df58jj/ep/papd/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        "imagem": "https://a-static.mlcdn.com.br/800x600/purificador-de-agua-natural-karina/karinabebebourosoficial/aquacinza/b74511ff644eaf47179cd19a605c3d01.jpeg"
    }
];

const giftGrid = document.getElementById('gift-grid');

function renderGifts() {
    giftItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `gift-card reveal ${item.isPix ? 'pix-card' : ''}`;
        
        if (item.isPix) {
            card.innerHTML = `
                <div class="image-container">
                    <div class="pix-icon">💸</div>
                </div>
                <div class="card-content">
                    <h3 class="gift-name">${item.nome}</h3>
                    <button class="btn-buy">Dar Presente via PIX</button>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="image-container">
                    <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
                </div>
                <div class="card-content">
                    <h3 class="gift-name">${item.nome}</h3>
                    <a href="${item.url}" target="_blank" class="btn-buy">Presentear</a>
                </div>
            `;
        }
        
        card.addEventListener('click', (e) => {
            if (item.isPix) {
                openPixModal();
            } else if (!e.target.classList.contains('btn-buy')) {
                window.open(item.url, '_blank');
            }
        });

        giftGrid.appendChild(card);
    });
}

// Modal and PIX Logic
const modal = document.getElementById('pix-modal');
const closeModal = document.getElementById('close-modal');
const btnCopy = document.getElementById('btn-copy');
const copySuccess = document.getElementById('copy-success');
const pixKey = "16988695554";

function openPixModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePixModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    copySuccess.classList.remove('active');
}

closeModal.onclick = closePixModal;
window.onclick = (event) => {
    if (event.target == modal) closePixModal();
};

btnCopy.onclick = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
        copySuccess.classList.add('active');
        btnCopy.innerText = "Chave Copiada!";
        setTimeout(() => {
            btnCopy.innerText = "Copiar Chave PIX";
        }, 2000);
    });
};

// Scroll Reveal Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial call
renderGifts();
// Trigger initial reveal for items in viewport
setTimeout(reveal, 100);
