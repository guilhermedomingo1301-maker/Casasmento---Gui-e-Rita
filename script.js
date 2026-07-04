let contadorAcompanhantes = 0;
const telefoneWhatsApp = "5582988369610";

// Vitrine de Presentes com valores estimados de referência
const products = [
    {
        id: 1,
        title: "Cozinha Compacta Luna sem Tampo",
        category: "cozinha",
        imageUrl: "https://m.magazineluiza.com.br/a-static/420x420/cozinha-compacta-luna-sem-tampo-e-pia-kappesberg-3-pecas-canela-verde-oliva/grupok1sa/r780-cnve/2c391bb99aee78ef2668193da2d6e3d6.jpeg",
        estimatedValue: 1.104 ,
        description: "Cozinha Compacta Luna sem Tampo e Pia Kappesberg 3 Peças Canela/Verde Oliva."
    },
    {
        id: 2,
        title: "Mesa 4 cadeiras Madesa",
        category: "cozinha",
        imageUrl: "https://m.magazineluiza.com.br/a-static/420x420/conjunto-sala-de-jantar-luana-mesa-4-cadeiras-madesa/lojawebcontinentalmarketplace/mkp000631001540/15d3977f5f32a0d832d6e360d4bf0526.jpeg",
        estimatedValue: 439,
        description: "Conjunto Sala de Jantar Luana Mesa 4 Cadeiras Madesa."
    },
    {
        id: 3,
        title: "Processador Oster",
        category: "cozinha",
        imageUrl: "https://m.media-amazon.com/images/I/614p2dVXYSL._AC_SY450_.jpg",
        estimatedValue: 198,
        description: "Oster OMPR670 Compacto 3 em 1 - Processador, 220V, 300W, Preto, 16 x 16 x 33 cm."
    },
    {
        id: 4,
        title: "Geladeira Electrolux Frost Free",
        category: "cozinha",
        imageUrl: "data:image/webp;base64,UklGRmIEAABXRUJQVlA4IFYEAACwJACdASrNAM8APj0ejEQiIaGTm1zcIAPEtLdfOEB/j8K7lNah7JbzvBLylq9pWw38ac6VpBLnRrCYvg9TBf/b8lZodlQZMB1cfxkb5WJ57qfbRflVmqrVBwy8QVuAvMEsvrz6ULOVEIM50u/QixKqS1q48/2DLTIMbSDbGzd3iXUB4FPye2M1KJBebTrP1IZo0xKVhyjo8qP1Bwy8QTKYQ8MfYiPsxrzR9WNz3yU0mdBwy7zlZ1C23agVy8Wqp9ApiRUB9DANviJeLU9Dj+iUTfL31ExFsqDJgeB44orWLswvakQLJtIxWt/YZtqMmJFLl/mzwi8dR/ydGi49Bwy73jo/tr/vJXs4IYJcIAVNnjB3iGaJLWIi2kU+QP2/hvgAHTGDRv6bdqtoCEGUAAD+/3jzi79NFE3fgdsZaY49UX8Vu8fG+WLxh+kikMn9jKe8wKdPoF0S03atv6HoNC0qrVwKbivSnXvDQrxDDuimpi1BCpKmwM9dLFUCJQCtK+WQUum5tyjAHnxigOU445GlTaFIxtXXj4Gk9Kb6HU1i8u4DQCDsY1N4/NLxXNrvqin7E3149/x6dMUlSirq8L5Hx1nPzwK66chUYlaJovq7HRoDKdUydr4/D/kcQOHlbWQHCcBs+92JnnqN1bc5SE418xq15Uu4gY72qL7DqiqjLuaMghQiQSo4aHPJWWQoKfj+vQKsylW0E/XPjC3ze7fjCWZILT78W7QhwGWnd0YnEz32kaWSyP8sEvuxnWtyyZbtWWC6uUEugtsY1RXkvtNviq4PN12+YWfLzT/naverl/kg0Tn00IFv/9Yw9U/SKey8AxZwIFj8dWiezGvtEJ6FejklVgPOI3hb+jYe+mrhmOjErah5nEX+QmDMRVv84cFrQJOsmWACRp73wVdzfeQyunyah5S/fVK+tP0ma5/GKAaCpbNr/Fl093XGv9td+MvjGKhedKRfVNMA2budJD8uvM/PxWOTwWhcL/T2Ag7WFy2whpHVb6HQs5Mjg/PBEzDP3ftsQ6h4Qgp3cXc1IUO2vrjY2Frm3ED1WTuP/VENkmExW0AIEYBf/M3sAxSZuv6/0dlH1JFSVfjb+Ec7sIBmjHBt7qq/Tssdo7QFgvoVL2K3wQEsoGcxfO4YcnGmjVheu6n3u8TuvAMPxOPtni/BWbF85GyPaS9eSh6vaXy7iTmr1EYFdem43++P/T/A+HAgje8BviDAAufM+M/O4BZzJYQPFQ0SNXRqNyirncpFErm/I4oa6syjk1LiwPeVpABviQ+5FcLIViz252yTExp/Z+IRfsolFokcFiUBzZgcyLEGAUqpiutOzmRPqov9SOnKHyKGTbqyvtEglV9fOyJhWKmwddYiiC34xh2WEbmbWI+nPiig7pWFx1T4gc1rmK75geImrU7Auu96w8T+vbt3W10WMakr/Y5o13nySH3aSL9+DMwP2TyS5uIywPzP+PbZxk6JAAA=",
        estimatedValue: 2.499,
        description: "A Geladeira Electrolux Frost Free 320L Gaveta Hortifruti Duplex Inox Look (TF38S)."
    },
    {
        id: 5,
        title: "Luminária de Chão",
        category: "sala",
        imageUrl: "https://m.media-amazon.com/images/I/61UDZxil4gL._AC_SX522_.jpg",
        estimatedValue: 120,
        description: "Luminária de piso para leitura, em metal preto ou dourado escuro, para compor o cantinho da nossa sala de estar."
    },
    {
        id: 6,
        title: "Smart TV 32 HD Philco P32CRB Roku TV HDR10 Dolby Audio",
        category: "eletro",
        imageUrl: "https://imgs.casasbahia.com.br/55071897/2xg.jpg?imwidth=500?imwidth=828",
        estimatedValue: 889,
        description: "Airfryer digital espaçosa para nos ajudar a preparar refeições deliciosas e saudáveis rapidamente."
    },
    {
        id:7,
        title: "Sofá Retrátil",
        category: "sala",
        imageUrl: "https://m.magazineluiza.com.br/a-static/420x420/sofa-retratil-reclinavel-3-lugares-suede-phormatta-evolution-smp/magazineluiza/121927508/987f3445d9028df111ea28c07dfa54a9.jpg",
        estimatedValue: 1.195,
        description: "Madeira Pinus e Eucalipto 100% Reflorestada.",
    },

];

const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('gift-modal');
const closeModalBtn = document.querySelector('.close-modal');

function displayProducts(filteredProducts) {
    if(!productsGrid) return;
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image"><img src=${product.imageUrl} alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;" /></div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p style="font-size:13px; color:var(--color-700); font-weight:bold; margin-bottom:8px;">Ref: R$ ${product.estimatedValue}</p>
                <button class="view-btn" onclick="openModal(${product.id})">Ver Detalhes</button>
            </div>
        </div>
    `).join('');
}

displayProducts(products);

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const category = e.target.dataset.category;
        if (category === 'all') {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered);
        }
    });
});

let currentProductValue = 0;
function openModal(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('modal-title').innerText = product.title;
        document.getElementById('modal-category').innerText = product.category;
        document.getElementById('modal-description').innerText = product.description;
        document.getElementById('modal-icon-container').innerHTML = `<img src="${product.imageUrl}" alt="${product.title}" style="width: 100%; max-height: 200px; object-fit: contain; display: block; margin: 0 auto 15px;" />`;
        currentProductValue = product.estimatedValue;
        modal.classList.add('active');
    }
}

document.getElementById('modal-contribute-btn').addEventListener('click', () => {
    modal.classList.remove('active');
    document.getElementById('valorLivre').value = currentProductValue;
    document.getElementById('pix-section').scrollIntoView({ behavior: 'smooth' });
    gerarPix(currentProductValue);
});

closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

function adicionarAcompanhante() {
  contadorAcompanhantes++;
  const div = document.createElement("div");
  div.className = "acompanhante";
  div.innerHTML = `
    <label>Acompanhante ${contadorAcompanhantes}</label>
    <input type="text" class="acompanhanteInput" placeholder="Nome do acompanhante" />
  `;
  document.getElementById("acompanhantes").appendChild(div);
}

function confirmarPresenca() {
  const nome = document.getElementById("nome").value.trim();
  if (!nome) {
    alert("Digite seu nome para confirmar presença.");
    return;
  }
  const acompanhantes = [...document.querySelectorAll(".acompanhanteInput")]
    .map(input => input.value.trim())
    .filter(nome => nome !== "");

  let mensagem = `Olá! Quero confirmar minha presença no casamento de Guilherme e Rita.%0A%0A`;
  mensagem += `Nome: ${nome}%0A`;

  if (acompanhantes.length > 0) {
    mensagem += `%0AAcompanhantes:%0A`;
    acompanhantes.forEach((pessoa, index) => {
      mensagem += `${index + 1}. ${pessoa}%0A`;
    });
  } else {
    mensagem += `%0ASem acompanhantes.`;
  }
  window.open(`https://wa.me/${telefoneWhatsApp}?text=${mensagem}`, "_blank");
}

function selecionarValor(valor) {
  document.getElementById('valorLivre').value = valor;
  gerarPix(valor);
}

function usarValorLivre() {
  const valor = Number(document.getElementById("valorLivre").value);
  if (!valor || valor <= 0) {
    alert("Digite um valor válido.");
    return;
  }
  gerarPix(valor);
}

function gerarPix(valor) {
  const chave = document.getElementById("chavePix").value;
  const nomeRecebedor = "GUILHERME E RITA";
  const cidade = "MACEIO";
  const descricao = "Presente casamento";

  const pix = gerarPayloadPix({ chave, nomeRecebedor, cidade, valor, descricao });

  document.getElementById("pixArea").classList.remove("hidden");
  document.getElementById("pixCopiaCola").value = pix;
  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: pix,
    width: 220,
    height: 220
  });
}

function copiarPix() {
  const campo = document.getElementById("pixCopiaCola");
  campo.select();
  campo.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Código Pix copiado!");
}

function formatarCampo(id, valor) {
  const tamanho = String(valor.length).padStart(2, "0");
  return id + tamanho + valor;
}

function gerarPayloadPix({ chave, nomeRecebedor, cidade, valor, descricao }) {
  const gui = formatarCampo("00", "br.gov.bcb.pix") +
              formatarCampo("01", chave) +
              formatarCampo("02", descricao);

  const merchantAccount = formatarCampo("26", gui);

  const payloadSemCRC =
    formatarCampo("00", "01") +
    merchantAccount +
    formatarCampo("52", "0000") +
    formatarCampo("53", "986") +
    formatarCampo("54", valor.toFixed(2)) +
    formatarCampo("58", "BR") +
    formatarCampo("59", nomeRecebedor.substring(0, 25)) +
    formatarCampo("60", cidade.substring(0, 15)) +
    formatarCampo("62", formatarCampo("05", "***")) +
    "6304";

  return payloadSemCRC + crc16(payloadSemCRC);
}

function crc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}
