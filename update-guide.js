const language = document.documentElement.lang === "tr" ? "tr" : "en";
const content = {
  "tr": {
    "play": "Oynat",
    "pause": "Duraklat",
    "step": "Adım",
    "alt": "Gerçek saat güncelleme ekranı",
    "scenes": [
      [
        "Güncelleme dosyalarını indirin",
        "Güncelleme bölümünden saatinize ait iki .bin dosyasını indirin. Birinin adında Firmware, diğerinin adında FileSystem bulunur.",
        "Örnek dosya adları aşağıda gösterilir. İndirilen güncel dosyaların adlarını değiştirmeyin.",
        "update-controls.jpg",
        "files"
      ],
      [
        "Saatin WiFi ağına bağlanın",
        "WiFi ayarlarından DIGITAL-CLOCK ile başlayan ağa bağlanın. Şifre değiştirilmediyse 12345678 kullanın.",
        "“İnternet yok” uyarısı normaldir. Saat ağına bağlı kalın.",
        "update-controls.jpg",
        "wifi"
      ],
      [
        "Güncelleme sayfasını açın",
        "Tarayıcıya 192.168.4.1/update yazın. Firmware ve Filesystem bölümleri görünür.",
        "Araçlar menüsündeki güncelleme bağlantısını da kullanabilirsiniz.",
        "update-controls.jpg",
        "overview"
      ],
      [
        "Firmware dosyasını seçin",
        "Firmware bölümündeki Dosya Seç düğmesine basın. İndirdiğiniz, adında Firmware geçen .bin dosyasını seçin.",
        "İşaretli alan dosya seçme düğmesidir.",
        "firmware-focus.jpg",
        "choose"
      ],
      [
        "Firmware yüklemesini başlatın",
        "Seçilen dosyanın adı göründükten sonra Firmware'i Yükle / Upload Firmware düğmesine basın.",
        "Dosya seçmek tek başına yüklemeyi başlatmaz. Şimdi işaretli yükleme düğmesine basın.",
        "firmware-ready.jpg",
        "upload"
      ],
      [
        "Firmware başarıyla yüklendi",
        "Yükleme tamamlandığında bu başarı ekranı görünür. Saat otomatik olarak yeniden başlar. Bağlantı koparsa saat WiFi ağına tekrar bağlanın.",
        "İşlem bitmeden elektriği kesmeyin. Ardından 192.168.4.1/update sayfasını yeniden açın.",
        "firmware-focus.jpg",
        "successFirmware"
      ],
      [
        "Filesystem dosyasını seçin",
        "Yeniden açtığınız sayfada Filesystem bölümünün Dosya Seç düğmesine basın. Adında FileSystem geçen .bin dosyasını seçin.",
        "Firmware dosyasını bu bölüme seçmeyin.",
        "filesystem-focus.jpg",
        "choose"
      ],
      [
        "Filesystem yüklemesini başlatın",
        "Seçilen dosyanın adı göründükten sonra Filesystem'i Yükle / Upload Filesystem düğmesine basın.",
        "İşaretli düğme web arayüzü dosyasının yüklenmesini başlatır.",
        "filesystem-ready.jpg",
        "upload"
      ],
      [
        "Filesystem başarıyla yüklendi",
        "Yükleme tamamlandığında Filesystem başarı mesajı görünür. Saat bir kez daha otomatik olarak yeniden başlar.",
        "Yeniden başlatma sırasında kısa süreli WiFi kesintisi normaldir.",
        "filesystem-focus.jpg",
        "successFilesystem"
      ],
      [
        "Ana ekranı açın ve sürümleri kontrol edin",
        "Gerekirse saat WiFi ağına yeniden bağlanın ve 192.168.4.1 adresini açın. Ayar sayfasını yenileyin.",
        "Mevcut firmware ve web arayüzü sürümlerini üstteki WiFi bilgisinin yanında görebilirsiniz. Telefon veya dar ekranda sürümler WiFi satırının altında görünür.",
        "home-current-tr.jpg",
        "home"
      ]
    ]
  },
  "en": {
    "play": "Play",
    "pause": "Pause",
    "step": "Step",
    "alt": "Actual clock update screen",
    "scenes": [
      [
        "Download the update files",
        "Download the two .bin files for your clock from the update section. One file name contains Firmware, the other contains FileSystem.",
        "Example file names are shown below. Keep the names of the current files you download.",
        "update-controls.jpg",
        "files"
      ],
      [
        "Connect to the clock WiFi",
        "In your WiFi settings, connect to the network beginning with DIGITAL-CLOCK. Use 12345678 if the password has not been changed.",
        "A “No internet” warning is normal. Stay connected to the clock.",
        "update-controls.jpg",
        "wifi"
      ],
      [
        "Open the update page",
        "Enter 192.168.4.1/update in your browser. The Firmware and Filesystem sections appear.",
        "You can also open the update link from the Tools menu.",
        "update-controls.jpg",
        "overview"
      ],
      [
        "Select the firmware file",
        "Press Choose File in the Firmware section. Select the downloaded .bin file whose name contains Firmware.",
        "The highlighted area is the file picker.",
        "firmware-focus.jpg",
        "choose"
      ],
      [
        "Start the firmware upload",
        "When the selected file name appears, press Firmware'i Yükle / Upload Firmware.",
        "Selecting a file does not start the upload. Now press the highlighted upload button.",
        "firmware-ready.jpg",
        "upload"
      ],
      [
        "Firmware uploaded successfully",
        "This completion screen appears when the upload finishes. The clock restarts automatically. If disconnected, reconnect to the clock WiFi.",
        "Keep the power connected until completion, then reopen 192.168.4.1/update.",
        "firmware-focus.jpg",
        "successFirmware"
      ],
      [
        "Select the filesystem file",
        "On the reopened page, press Choose File in the Filesystem section. Select the .bin file whose name contains FileSystem.",
        "Do not select the firmware file in this section.",
        "filesystem-focus.jpg",
        "choose"
      ],
      [
        "Start the filesystem upload",
        "When the selected file name appears, press Filesystem'i Yükle / Upload Filesystem.",
        "The highlighted button starts uploading the web interface file.",
        "filesystem-ready.jpg",
        "upload"
      ],
      [
        "Filesystem uploaded successfully",
        "The Filesystem completion message appears when the upload finishes. The clock restarts automatically again.",
        "A brief WiFi disconnection during restart is normal.",
        "filesystem-focus.jpg",
        "successFilesystem"
      ],
      [
        "Open the home page and check the versions",
        "Reconnect to the clock WiFi if needed and open 192.168.4.1. Refresh the settings page.",
        "Find the installed firmware and web interface versions beside the WiFi information at the top. On a phone or narrow screen, the versions appear below the WiFi line.",
        "home-current-en.jpg",
        "home"
      ]
    ]
  }
};
const locale = content[language];
let index = 0;
let playing = false;
let timer;
const image = document.getElementById("screen");
function render() {
  const scene = locale.scenes[index];
  document.getElementById("stepNumber").textContent = locale.step + " " + (index + 1) + " / " + locale.scenes.length;
  document.getElementById("title").textContent = scene[0];
  document.getElementById("copy").textContent = scene[1];
  document.getElementById("note").textContent = scene[2];
  image.src = "images/update/" + scene[3];
  image.width = scene[4] === "home" ? 1265 : scene[4] === "overview" ? 960 : 472;
  image.height = scene[4] === "home" ? 991 : 413;
  const frame = document.getElementById("shot");
  frame.className = "shot " + scene[4];
  const selectedFile = scene[4] === "upload"
    ? (scene[3].startsWith("firmware") ? "DigitalClock-Firmware-VX.X.X.bin" : "DigitalClock-FileSystem-VX.X.X.bin")
    : "No file chosen";
  frame.querySelectorAll(".file-picker-preview > span:last-child").forEach(label => { label.textContent = selectedFile; });
  const success = scene[4] === "successFirmware" || scene[4] === "successFilesystem";
  const updateType = scene[4] === "successFilesystem" ? "Filesystem" : "Firmware";
  document.getElementById("completion").hidden = !success;
  document.getElementById("completeTr").textContent = updateType + " basariyla yuklendi. Saat yeniden baslatiliyor...";
  document.getElementById("completeEn").textContent = "The " + updateType + " was uploaded successfully. The clock is restarting...";
  document.querySelector("figcaption").hidden = success;
  document.getElementById("example").hidden = scene[4] !== "files" && scene[4] !== "wifi";
  document.getElementById("filesExample").hidden = scene[4] !== "files";
  document.getElementById("wifiExample").hidden = scene[4] !== "wifi";
  image.alt = locale.alt;
  document.getElementById("imageLink").href = language === "en" ? "#" : image.src;
  document.getElementById("enlarge").href = language === "en" ? "#" : image.src;
  document.querySelector("figure").classList.remove("zoomed");
  document.getElementById("progress").max = locale.scenes.length;
  document.getElementById("progress").value = index + 1;
  document.querySelectorAll(".step-list button").forEach((button, i) => {
    button.classList.toggle("active", i === index);
    button.setAttribute("aria-current", i === index ? "step" : "false");
  });
}
function setPlaying(value) {
  playing = value;
  clearInterval(timer);
  document.getElementById("play").textContent = playing ? locale.pause : locale.play;
  document.getElementById("play").setAttribute("aria-pressed", String(playing));
  if (playing) timer = setInterval(() => {
    if (index === locale.scenes.length - 1) { setPlaying(false); return; }
    index++;
    render();
  }, 12000);
}
locale.scenes.forEach((scene, i) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = locale.step + " " + (i + 1);
  button.addEventListener("click", () => { setPlaying(false); index = i; render(); });
  document.getElementById("stepList").appendChild(button);
});
document.getElementById("previous").addEventListener("click", () => { setPlaying(false); index = Math.max(0, index - 1); render(); });
document.getElementById("next").addEventListener("click", () => { setPlaying(false); index = Math.min(locale.scenes.length - 1, index + 1); render(); });
document.getElementById("play").addEventListener("click", () => { if (!playing && index === locale.scenes.length - 1) index = 0; render(); setPlaying(!playing); });
if (language === "en") {
  const enlarge = () => {
    const expanded = document.querySelector("figure").classList.toggle("zoomed");
    document.getElementById("enlarge").textContent = expanded ? "Close image" : "Enlarge image";
  };
  ["imageLink", "enlarge"].forEach(id => document.getElementById(id).addEventListener("click", event => { event.preventDefault(); enlarge(); }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelector("figure").classList.remove("zoomed");
      document.getElementById("enlarge").textContent = "Enlarge image";
    }
  });
}
render();
