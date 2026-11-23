
// TAMANHO DAS FONTES
let tamanhoFonte = 16;

document.querySelector("#aumentar").addEventListener("click", () => {
  tamanhoFonte = Math.min(tamanhoFonte + 2, 28);
    document.body.style.fontSize = tamanhoFonte + "px";
    });

    document.querySelector("#diminuir").addEventListener("click", () => {
      tamanhoFonte = Math.max(tamanhoFonte - 2, 12);
        document.body.style.fontSize = tamanhoFonte + "px";
        });

        document.querySelector("#normal").addEventListener("click", () => {
          tamanhoFonte = 16;
            document.body.style.fontSize = "16px";
            });

            // LEITURA EM VOZ ALTA
            const botaoLer = document.querySelector("#ler");
            const botaoPausar = document.querySelector("#pausar");
            const botaoParar = document.querySelector("#parar");

            botaoLer.addEventListener("click", () => {
              if (!("speechSynthesis" in window)) {
                  alert("Seu navegador não suporta leitura em voz alta.");
                      return;
                        }

                          window.speechSynthesis.cancel();

                            const texto = document.querySelector("main").innerText;
                              const fala = new SpeechSynthesisUtterance(texto);

                                fala.lang = "pt-BR";
                                  fala.rate = 1;

                                    window.speechSynthesis.speak(fala);
                                    });

                                    botaoPausar.addEventListener("click", () => {
                                      if (window.speechSynthesis.speaking) {
                                          if (window.speechSynthesis.paused) {
                                                window.speechSynthesis.resume();
                                                      botaoPausar.textContent = "Pausar";
                                                          } else {
                                                                window.speechSynthesis.pause();
                                                                      botaoPausar.textContent = "Continuar";
                                                                          }
                                                                            }
                                                                            });

                                                                            botaoParar.addEventListener("click", () => {
                                                                              window.speechSynthesis.cancel();
                                                                                botaoPausar.textContent = "Pausar";
                                                                                });

                                                                                // ALTO CONTRASTE
                                                                                document.querySelector("#contraste").addEventListener("click", () => {
                                                                                  document.body.classList.toggle("alto-contraste");

                                                                                    const ativo = document.body.classList.contains("alto-contraste");

                                                                                      document.querySelector("#contraste").textContent =
                                                                                          ativo ? "Desativar alto contraste" : "Ativar alto contraste";
                                                                                          });

                                                                                          // MODAL DE AJUDA
                                                                                          const modal = document.querySelector("#modal");

                                                                                          document.querySelector("#ajuda").addEventListener("click", () => {
                                                                                            modal.hidden = false;
                                                                                              document.querySelector("#fechar").focus();
                                                                                              });

                                                                                              document.querySelector("#fechar").addEventListener("click", () => {
                                                                                                modal.hidden = true;
                                                                                                  document.querySelector("#ajuda").focus();
                                                                                                  });

                                                                                                  // FECHAR MODAL COM ESC
                                                                                                  document.addEventListener("keydown", (evento) => {
                                                                                                    if (evento.key === "Escape") {
                                                                                                        modal.hidden = true;
                                                                                                          }
                                                                                                          });
                                                                                                          