/* =========================================================================
   CONFIGURAÇÃO — ajuste aqui
   ========================================================================= */

const PIX = {
    // Chave PIX. Aceita telefone, CPF, e-mail ou chave aleatória (EVP).
    // RECOMENDADO: trocar o telefone por uma chave aleatória gerada no app do
    // banco. O telefone fica exposto publicamente nesta página.
    chave: "16988695554",

    // Nome do recebedor, como aparece no app de quem for pagar (máx. 25 chars).
    nome: "Rafaela e Leandro",

    // Cidade do recebedor (máx. 15 chars). Deve bater com a conta.
    cidade: "Ribeirao Preto",
};

const giftItems = [
    {
        nome: "Presente em Dinheiro (Qualquer Valor via PIX)",
        isPix: true,
    },
    {
        nome: "Depurador E Exaustor De Ar Suggar Slim 60cm 3 Velocidades Preto",
        url: "https://m.magazineluiza.com.br/depurador-e-exaustor-de-ar-suggar-slim-60cm-3-velocidades-preto/p/adjjeh7dd4/ed/depu/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/800x600/depurador-e-exaustor-de-ar-suggar-slim-60cm-3-velocidades-preto/techshop/depsug00030/1ed2c646bbf7bc06d2028b2038657ae2.jpg",
    },
    {
        nome: "Panela Elétrica de Pressão Philco PPP01P - 6 Litros, Painel Digital, com 13 Funções, Preto",
        url: "https://m.magazineluiza.com.br/panela-eletrica-de-pressao-philco-ppp01p-6-litros-painel-digital-com-13-funcoes-preto/p/eg63h71571/ep/eppe/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/470x352/panela-eletrica-de-pressao-philco-ppp01p-6-litros-painel-digital-com-13-funcoes-preto/efacil/210312-89/06a46dbd9b11e24ec3cdc113f87d1073.jpg",
    },
    {
        nome: "Conjunto De Panelas Sartin Champagne 7 Peças Cerâmica Mimo Style",
        url: "https://m.magazineluiza.com.br/conjunto-de-panelas-sartin-champagne-7-pecas-ceramica-mimo-style/p/chgd23ba6d/ud/cjpn/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/420x420/jogo-de-panelas-com-7-pecas-mimo-style-sartin-cook-champanhe/inpowermg/nac015956/8b18e9b4ba293adbdef19096a6f7514b.jpeg",
    },
    {
        nome: "Forma para Bolo de Alumínio Antiaderente Redonda Tramontina Brasil 24cm 2L",
        url: "https://m.magazineluiza.com.br/forma-para-bolo-de-aluminio-antiaderente-redonda-tramontina-brasil-20074-024/p/225992600/ud/assa/?partner_id=64853&utm_source=pdp_desk&utm_medium=share&seller_id=magazineluiza",
        imagem: "/forma-bolo-tramontina.png",
    },
    {
        nome: "Liquidificador Mondial Turbo Power L-99-FB Preto 550W com Filtro",
        url: "https://m.magazineluiza.com.br/liquidificador-mondial-turbo-power-l-99-fb-preto-com-filtro-3-velocidades-550w/p/021756700/ep/liqu/?partner_id=64853&utm_source=pdp_desk&utm_medium=share&seller_id=magazineluiza",
        imagem: "/liquidificador-mondial.png",
    },
    {
        nome: "Kit de 12 Utensílios de Silicone com Cabo de Madeira - Black Watch",
        url: "https://m.magazineluiza.com.br/jogo-de-colheres-modernas-c-12-pecas-black-watch/p/jbd5k89d48/ud/crmd/?partner_id=64853&utm_source=pdp_desk&utm_medium=share&seller_id=blackwatchltda",
        imagem: "/kit-utensilios-black-watch.png",
    },
    {
        nome: "Conjunto Jarra 1,5L com 6 Taças 240ml Cristal Lavanda - Lyor",
        url: "https://m.magazineluiza.com.br/conjunto-jarra-15l-com-6-tacas-240ml-vidro-cristal-lavanda-lyor/p/bek18h0c2g/ud/udas/?partner_id=64853&utm_source=pdp_desk&utm_medium=share&seller_id=lojaemporiodoreal",
        imagem: "/jarra-tacas-lavanda.jpg",
    },
    {
        nome: "Lava-Louças Brastemp 8 Serviços Branca BLF08BB",
        url: "https://m.magazineluiza.com.br/lava-loucas-brastemp-8-servicos-branca-blf08bb/p/af04hfbe27/ed/l08s/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/800x600/lava-loucas-8-servicos-brastemp-branca-blf08bb/whirlpool/326031199/b236ce3d97ab80b272f42430c052081d.jpg",
    },
    {
        nome: "Armário de Cozinha Completa Suspenso 300cm Cinza Nice Madesa 07",
        url: "https://m.magazineluiza.com.br/armario-de-cozinha-completa-suspenso-300cm-cinza-nice-madesa-07/p/ec6816f974/mo/mcoz/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/450pxx450px/armario-de-cozinha-completa-suspenso-300cm-cinza-nice-madesa-07/madesamoveis/grnc3000073b/92e42e6616dae09977b9ec1d9c41a12f.jpeg",
    },
    {
        nome: "Multiprocessador Elétrico de Alimentos 2 ou 3 Litros 127V",
        url: "https://m.magazineluiza.com.br/multiprocessador-eletrico-de-alimentos-2-ou-3-litros-127v-ou-220v-4-laminas-processador-de-alimentos-startools/p/aj4j81d0g3/ud/ttgm/?seller_id=mcfvendasoficial",
        imagem: "https://a-static.mlcdn.com.br/800x600/multiprocessador-eletrico-de-alimentos-2-ou-3-litros-127v-ou-220v-4-laminas-processador-de-alimentos-startools/mcfvendasoficial/ar0989/865e274bde99205f10f0786c931b2e06.jpeg",
    },
    {
        nome: "Grill Elétrica Redondo Antiaderente Startools 1200W",
        url: "https://m.magazineluiza.com.br/grill-eletrica-redondo-antiaderente-com-termostato-sem-fumaca-churrasqueira-ideal-para-cozinhas-e-varandas-40cm-grelha-255-cm-potencia-1200w-startools/p/gd5bca19jd/ep/epgr/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/450pxx450px/grill-eletrica-redondo-antiaderente-com-termostato-sem-fumaca-churrasqueira-ideal-para-cozinhas-e-varandas-40cm-grelha-255-cm-potencia-1200w-startools/mcfvendasoficial/ar1001/0f93c4c0675612a8eae947608c868f22.jpeg",
    },
    {
        nome: "Forno Elétrico Fischer Pop Grill de Bancada 44L",
        url: "https://m.magazineluiza.com.br/forno-eletrico-fischer-pop-grill-de-bancada-44l/p/aee8c95g3j/ed/frne/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/800x600/forno-eletrico-pop-grill-de-bancada-44l-fischer/homesupreme/8409/59421262d6599a3ccf102448bf12a3c4.jpg",
    },
    {
        nome: "Pipoqueira Elétrica Mondial Popflix PP-04",
        url: "https://m.magazineluiza.com.br/pipoqueira-eletrica-mondial-popflix-pp-04-1200w/p/236682800/ep/pipo/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/420x420/pipoqueira-eletrica-mondial-popflix-pp-04-1200w-220v-branco/tictacrelogiosecia/3213214/6c5baf3d0af357fe87ec82848122bf96.jpeg",
    },
    {
        nome: "Colchão Casal Strong Pillow Top Espuma D45 138x188x24cm",
        url: "https://m.magazineluiza.com.br/colchao-casal-strong-pillow-top-espuma-d45-138x188x24cm-bege-suporta-ate-150kg-por-pessoa-hellen/p/ec66k2b616/co/ccbc/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://imgs.pontofrio.com.br/1549343463/1xg.jpg?imwidth=500",
    },
    {
        nome: "Cobre Leito Casal Padrão 200 Fios Avere 03 Peças",
        url: "https://m.magazineluiza.com.br/cobre-leito-casal-padrao-200-fios-avere-03-pecas-borboletas-bia-enxovais/p/abkgjc1g67/cm/kenx/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/800x800/cobre-leito-casal-padrao-200-fios-avere-03-pecas-borboletas-bia-enxovais/ravatexcasa/1004678/51b68a93fd64b1289c765417d4f5bbbd.jpeg",
    },
    {
        nome: "Kit Jogo 6 Pratos Fundos Biona Folk em Cerâmica Decorada",
        url: "https://m.magazineluiza.com.br/kit-jogo-6-pratos-fundos-biona-folk-em-ceramica-decorada-215-cm-oxford/p/fjdkfc24cj/ud/pfsp/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/470x352/kit-jogo-6-pratos-fundos-biona-folk-em-ceramica-decorada-215-cm-oxford/decaelo/61386-6/9850b8ca90102c7d4f5f445e4af02e90.jpeg",
    },
    {
        nome: "Cafeteira Expresso Arno Nescafé Dolce Gusto Genio S Basic",
        url: "https://m.magazineluiza.com.br/cafeteira-expresso-arno-nescafe-dolce-gusto-genio-s-basic-de-capsula-15-bar-branco/p/023518000/ep/cadc/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/470x352/cafeteira-expresso-arno-nescafe-dolce-gusto-genio-s-basic-de-capsula-15-bar-branco/magazineluiza/023518000/f2b9faab15e067fb216ee0ede44dc8e3.jpg",
    },
    {
        nome: "Filtro De Agua Natural Purificador De Agua Karina",
        url: "https://m.magazineluiza.com.br/filtro-de-agua-natural-cinza-purificador-de-agua-karina-bebedouros/p/ec54df58jj/ep/papd/?partner_id=64853&utm_source=pdp_desk&utm_medium=share",
        imagem: "https://a-static.mlcdn.com.br/800x600/purificador-de-agua-natural-karina/karinabebebourosoficial/aquacinza/b74511ff644eaf47179cd19a605c3d01.jpeg",
    },
];

/* =========================================================================
   PIX — geração do BR Code (payload "copia e cola", padrão EMV do Bacen)
   ========================================================================= */

/** Remove acentos e caracteres fora do permitido pelo padrão EMV. */
function sanitize(text, maxLength) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^A-Za-z0-9 .-]/g, "")
        .trim()
        .slice(0, maxLength);
}

/**
 * Normaliza a chave para o formato exigido pelo BR Code.
 * Telefone precisa estar em E.164 (+55DDNNNNNNNNN) — digitar só os dígitos,
 * como se faz manualmente no app do banco, gera um QR Code inválido.
 */
function normalizePixKey(key) {
    const raw = key.trim();
    if (raw.includes("@")) return raw.toLowerCase();          // e-mail
    if (raw.startsWith("+")) return raw.replace(/[^\d+]/g, ""); // já em E.164

    const digits = raw.replace(/\D/g, "");
    if (digits.length === 10 || digits.length === 11) return "+55" + digits; // telefone
    if (digits.length === 12 || digits.length === 13) return "+" + digits;   // com DDI
    return raw; // CPF, CNPJ ou chave aleatória (EVP)
}

/** Monta um campo no formato TLV: id + tamanho (2 dígitos) + valor. */
function tlv(id, value) {
    return id + String(value.length).padStart(2, "0") + value;
}

/** CRC16/CCITT-FALSE — polinômio 0x1021, valor inicial 0xFFFF. */
function crc16(payload) {
    let crc = 0xffff;
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let bit = 0; bit < 8; bit++) {
            crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
}

/** Gera o payload completo do PIX (sem valor definido — quem paga escolhe). */
function buildPixPayload({ chave, nome, cidade }) {
    const body =
        tlv("00", "01") +                                     // payload format indicator
        tlv("01", "11") +                                     // reutilizável (múltiplos pagamentos)
        tlv("26", tlv("00", "br.gov.bcb.pix") + tlv("01", normalizePixKey(chave))) +
        tlv("52", "0000") +                                   // merchant category code
        tlv("53", "986") +                                    // moeda: BRL
        tlv("58", "BR") +                                     // país
        tlv("59", sanitize(nome, 25)) +
        tlv("60", sanitize(cidade, 15)) +
        tlv("62", tlv("05", "***"));                          // txid livre

    const withCrcTag = body + "6304";
    return withCrcTag + crc16(withCrcTag);
}

const pixPayload = buildPixPayload(PIX);

/* =========================================================================
   Renderização dos cards
   ========================================================================= */

const giftGrid = document.getElementById("gift-grid");

/** Imagem 1x1 transparente usada como fallback quando o CDN da loja cai. */
const BLANK_IMAGE =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

function createImageCard(item) {
    const image = document.createElement("img");
    image.src = item.imagem || BLANK_IMAGE;
    image.alt = item.nome;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 260;
    image.height = 210;

    // Sem isso, uma URL morta deixa o ícone de imagem quebrada no card.
    image.addEventListener("error", () => {
        image.src = BLANK_IMAGE;
        image.closest(".image-container").classList.add("image-missing");
    }, { once: true });

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    if (!item.imagem) imageContainer.classList.add("image-missing");
    imageContainer.appendChild(image);

    const link = document.createElement("a");
    link.className = "btn-buy stretched";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Presentear";

    return { media: imageContainer, action: link };
}

function createPixCard(item) {
    const icon = document.createElement("div");
    icon.className = "pix-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "💸";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    imageContainer.appendChild(icon);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn-buy stretched";
    button.textContent = "Dar Presente via PIX";
    button.addEventListener("click", openPixModal);

    return { media: imageContainer, action: button };
}

function renderGifts() {
    const fragment = document.createDocumentFragment();

    giftItems.forEach((item) => {
        const card = document.createElement("article");
        card.className = "gift-card reveal" + (item.isPix ? " pix-card" : "");

        const { media, action } = item.isPix ? createPixCard(item) : createImageCard(item);

        const title = document.createElement("h3");
        title.className = "gift-name";
        title.textContent = item.nome;

        const content = document.createElement("div");
        content.className = "card-content";
        content.append(title, action);

        card.append(media, content);
        fragment.appendChild(card);
    });

    giftGrid.appendChild(fragment);
}

/* =========================================================================
   Modal do PIX
   ========================================================================= */

const modal = document.getElementById("pix-modal");
const closeModalButton = document.getElementById("close-modal");
const btnCopy = document.getElementById("btn-copy");
const copyFeedback = document.getElementById("copy-feedback");
const pixKeyDisplay = document.getElementById("pix-key");
const qrContainer = document.getElementById("pix-qr");

let lastFocusedElement = null;

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

/**
 * Recebe o evento do botão que abriu o modal. Guardar `currentTarget` em vez de
 * `document.activeElement` importa: clicar num <button> nem sempre o foca
 * (Safari e Firefox não focam), e aí o foco voltaria para o <body> ao fechar,
 * jogando quem navega por teclado de volta pro topo da página.
 */
function openPixModal(event) {
    lastFocusedElement = event?.currentTarget ?? document.activeElement;
    modal.classList.add("active");
    modal.removeAttribute("aria-hidden");
    document.body.classList.add("modal-open");
    closeModalButton.focus();
}

function closePixModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setFeedback("", null);
    if (lastFocusedElement) lastFocusedElement.focus();
}

function setFeedback(message, tone) {
    copyFeedback.textContent = message;
    copyFeedback.classList.toggle("active", Boolean(message));
    copyFeedback.classList.toggle("error", tone === "error");
}

/** Mantém o foco dentro do modal enquanto ele estiver aberto. */
function trapFocus(event) {
    if (event.key !== "Tab") return;
    const focusables = Array.from(modal.querySelectorAll(FOCUSABLE));
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

closeModalButton.addEventListener("click", closePixModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) closePixModal();
});

document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("active")) return;
    if (event.key === "Escape") closePixModal();
    trapFocus(event);
});

/**
 * Copia o payload. navigator.clipboard não existe fora de contexto seguro e
 * falha em alguns navegadores embutidos (Instagram, Facebook) — daí o fallback
 * de seleção manual, para o botão nunca ficar mudo.
 */
async function copyPixPayload() {
    try {
        if (!navigator.clipboard) throw new Error("Clipboard API indisponível");
        await navigator.clipboard.writeText(pixPayload);

        setFeedback("✅ Código copiado! Cole no app do seu banco.", "success");
        btnCopy.textContent = "Código copiado!";
        setTimeout(() => {
            btnCopy.textContent = "Copiar código PIX";
        }, 2500);
    } catch {
        selectPixKeyText();
        setFeedback("Não foi possível copiar automaticamente. O código está selecionado — copie manualmente.", "error");
    }
}

function selectPixKeyText() {
    const range = document.createRange();
    range.selectNodeContents(pixKeyDisplay);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

btnCopy.addEventListener("click", copyPixPayload);

/* =========================================================================
   QR Code
   ========================================================================= */

/**
 * O gerador de QR vem de CDN e é carregado sob demanda. Se falhar (rede, CDN
 * bloqueado), a seção do QR some e o copia-e-cola continua funcionando —
 * ninguém fica sem conseguir presentear por causa disso.
 */
async function renderQrCode() {
    try {
        const { default: QRCode } = await import("https://esm.sh/qrcode@1.5.4");
        const dataUrl = await QRCode.toDataURL(pixPayload, {
            errorCorrectionLevel: "M",
            margin: 1,
            width: 320,
            color: { dark: "#1a1a1a", light: "#ffffff" },
        });

        const image = document.createElement("img");
        image.src = dataUrl;
        image.alt = "QR Code para pagamento via PIX";
        image.width = 200;
        image.height = 200;

        qrContainer.replaceChildren(image);
        qrContainer.hidden = false;
    } catch {
        qrContainer.hidden = true;
    }
}

/* =========================================================================
   Animação de entrada dos cards
   ========================================================================= */

/**
 * IntersectionObserver no lugar do listener de scroll: não roda a cada pixel
 * rolado e libera o observer assim que o card aparece.
 */
function setupReveal() {
    const cards = document.querySelectorAll(".reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("active"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            });
        },
        { rootMargin: "0px 0px -80px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
}

/* =========================================================================
   Inicialização
   ========================================================================= */

pixKeyDisplay.textContent = pixPayload;
document.getElementById("pix-key-plain").textContent = PIX.chave;

renderGifts();
setupReveal();
renderQrCode();
