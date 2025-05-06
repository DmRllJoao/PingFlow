// Quando clicar no botão, executa os testes
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", () => {
    medirPing();
    medirDownload();
    medirUpload();
  });
});

// ======== Função para medir o PING =========
function medirPing() {
  const url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const startTime = Date.now();

  fetch(url, { method: "GET", mode: "no-cors", cache: "no-store" })
    .then(() => {
      const endTime = Date.now();
      const ping = endTime - startTime;
      document.getElementById("ping").textContent = `${ping} ms`;
    })
    .catch(() => {
      document.getElementById("ping").textContent = "Erro";
    });
}

// ======== Função para medir o DOWNLOAD SIMULADO =========
function medirDownload() {
  const dataSize = 10 * 1024 * 1024; // 10MB
  const startTime = performance.now();

  setTimeout(() => {
    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000;
    const speedMbps = ((dataSize * 8) / duration / 1024 / 1024).toFixed(2);
    document.getElementById("download").textContent = `${speedMbps} Mbps`;
  }, 200);
}

// ======== Função para medir o UPLOAD SIMULADO =========
function medirUpload() {
  const dataSize = 20 * 1024 * 1024; // 20MB
  const startTime = performance.now();

  setTimeout(() => {
    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000;
    const speedMbps = ((dataSize * 8) / duration / 1024 / 1024).toFixed(2);
    document.getElementById("upload").textContent = `${speedMbps} Mbps`;
  }, 300);
}
