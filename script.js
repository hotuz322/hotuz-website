// APK пока не подключён. Когда файл будет загружен, замените href="#download"
// у обеих ссылок в index.html на href="app.apk" и добавьте app.apk в корень сайта.
document.querySelectorAll('.download-hit').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Скачивание приложения HOTUZ скоро будет доступно.');
  });
});
