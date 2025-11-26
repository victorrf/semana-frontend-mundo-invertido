// js/main.js
// import { subscribeToHellfireClube } from "./data/hellfire-clube.js";

function main() {
  const txtName = document.getElementById("txtName");
  const txtEmail = document.getElementById("txtEmail");
  const txtLevel = document.getElementById("txtLevel");
  const txtCharacter = document.getElementById("txtCharacter");

  document.getElementById("btnSubscribe").addEventListener("click", async () => {

    const subscribe = {
      name: txtName.value.trim(),
      email: txtEmail.value.trim(),
      level: txtLevel.value.trim(),
      character: txtCharacter.value.trim(),
      createdAt: new Date()
    };

    if (!subscribe.name || !subscribe.email) {
      alert("Nome e E-mail são obrigatórios!");
      return;
    }

    try {
      const id = await subscribeToHellfireClube(subscribe);
      const darkMode = document.body.classList.contains("dark-theme");

      Swal.fire({
        icon: 'success',
        title: 'Inscrição enviada!',
        text: 'Sua participação no Hellfire Club foi registrada com sucesso.',
        confirmButtonText: 'OK',
        background: darkMode ? '#0b0b0b' : '#ffffff',
        color: darkMode ? '#fff' : '#000'
      });

      // limpa o formulário
      txtName.value = "";
      txtEmail.value = "";
      txtLevel.value = "";
      txtCharacter.value = "";

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Não foi possível enviar a inscrição. Veja o console.',
        confirmButtonText: 'Fechar'
      });
    }
  });
}

main();

window.addEventListener('click', function() {
  const audio = document.getElementById('music');
  audio.play();
  audio.volume = 0.2;
})

document.getElementById('switch-theme-button').addEventListener("click", function switchTheme() { 
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  const theme = document.body.classList[0];
  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

  const audio = document.getElementById('music');
  audio.src = `assets/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
})
