let contadorAcompanhantes = 0;

const telefoneWhatsApp = "5582988369610";

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

  const pix = gerarPayloadPix({
    chave,
    nomeRecebedor,
    cidade,
    valor,
    descricao
  });

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