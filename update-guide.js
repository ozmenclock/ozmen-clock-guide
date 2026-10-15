const language = document.documentElement.lang === "tr" ? "tr" : "en";
const content = {
  tr: {
    play: "Oynat", pause: "Duraklat", step: "Adım",
    alt: "Saatin gerçek iki dilli güncelleme ekranı",
    scenes: [
      ["İki dosyayı indirin", "Güncelleme dosyaları sayfasından DigitalClock-Firmware-V1.5.3.bin ve DigitalClock-FileSystem-V1.5.3.bin dosyalarını indirin.\n\nÖnce firmware, ardından filesystem yüklenir.", "İndirme için internet bağlantınızı kullanın; dosyaları indirdikten sonra saatin WiFi ağına geçin.", "update-page.jpg"],
      ["Saatin güncelleme sayfasını açın", "DIGITAL-CLOCK ile başlayan WiFi ağına bağlanın. Şifre değiştirilmediyse 12345678 kullanın.\n\nTarayıcıya 192.168.4.1/update yazın. Resimdeki iki dilli güncelleme sayfası açılır.", "Saat ağına bağlıyken “İnternet yok” uyarısı normaldir. Bağlantıda kalın.", "update-page.jpg"],
      ["Firmware dosyasını seçin", "Soldaki Firmware bölümünde Dosya Seç düğmesine basın. DigitalClock-Firmware-V1.5.3.bin dosyasını seçin.\n\nSeçtiğiniz dosyanın adı düğmenin yanında görünür.", "Bu görüntü, firmware dosyası gerçek cihaz sayfasında seçildikten sonra alınmıştır.", "firmware-selected.jpg"],
      ["Firmware'i yükleyin", "Firmware'i Yükle / Upload Firmware düğmesine basın. İlerleme çubuğunu ve tamamlanma mesajını bekleyin.\n\nSaat otomatik olarak yeniden başlar.", "Yalnızca dosya seçmek yüklemeyi başlatmaz; yükleme düğmesine de basmanız gerekir.", "firmware-selected.jpg"],
      ["WiFi ağına yeniden bağlanın", "Yeniden başlatma sırasında WiFi kısa süreliğine kopabilir. Gerekirse saatin ağına tekrar bağlanın.\n\n192.168.4.1/update sayfasını yeniden açın.", "Firmware yüklemesi bittikten sonra filesystem adımına geçin.", "update-page.jpg"],
      ["Filesystem dosyasını yükleyin", "Sağdaki Filesystem bölümünde Dosya Seç düğmesine basın. DigitalClock-FileSystem-V1.5.3.bin dosyasını seçin.\n\nFilesystem'i Yükle / Upload Filesystem düğmesine basıp işlemin tamamlanmasını bekleyin.", "Bu görüntü, filesystem dosyası gerçek cihaz sayfasında seçildikten sonra alınmıştır.", "filesystem-selected.jpg"],
      ["Normal ayar sayfasını açın", "Saat yeniden başladıktan sonra gerekirse WiFi ağına tekrar bağlanın. 192.168.4.1 adresini açıp ayar sayfasını yenileyin.\n\nSaat normal çalıştığında güncelleme tamamlanmıştır.", "Sayfa açılmazsa saat ağına bağlı olduğunuzu kontrol edip tekrar deneyin.", "update-page.jpg"]
    ]
  },
  en: {
    play: "Play", pause: "Pause", step: "Step",
    alt: "The clock's actual bilingual update screen",
    scenes: [
      ["Download both files", "Download DigitalClock-Firmware-V1.5.3.bin and DigitalClock-FileSystem-V1.5.3.bin from the update downloads page.\n\nUpload firmware first, then filesystem.", "Use your internet connection to download the files, then switch to the clock's WiFi network.", "update-page.jpg"],
      ["Open the clock's update page", "Connect to the WiFi network beginning with DIGITAL-CLOCK. Use 12345678 if the password has not been changed.\n\nOpen 192.168.4.1/update in your browser. The bilingual page shown here will appear.", "A “No internet” warning is normal while connected to the clock. Stay connected.", "update-page.jpg"],
      ["Select the firmware file", "In the Firmware section on the left, press Choose File. Select DigitalClock-Firmware-V1.5.3.bin.\n\nThe selected file name appears next to the file picker.", "This image was captured after selecting the firmware file on the actual device page.", "firmware-selected.jpg"],
      ["Upload firmware", "Press Firmware'i Yükle / Upload Firmware. Wait for the progress bar and completion message.\n\nThe clock will restart automatically.", "Selecting the file does not start the upload; you also need to press the upload button.", "firmware-selected.jpg"],
      ["Reconnect to the clock WiFi", "WiFi may disconnect briefly while the clock restarts. Reconnect to the clock's network if needed.\n\nReopen 192.168.4.1/update.", "Continue with filesystem only after the firmware upload has finished.", "update-page.jpg"],
      ["Upload the filesystem file", "In the Filesystem section on the right, press Choose File. Select DigitalClock-FileSystem-V1.5.3.bin.\n\nPress Filesystem'i Yükle / Upload Filesystem and wait for the upload to finish.", "This image was captured after selecting the filesystem file on the actual device page.", "filesystem-selected.jpg"],
      ["Open the normal settings page", "After the clock restarts, reconnect to its WiFi network if needed. Open 192.168.4.1 and refresh the settings page.\n\nThe update is complete when the clock works normally.", "If the page does not open, check that you are connected to the clock's network and try again.", "update-page.jpg"]
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
  image.alt = locale.alt;
  document.getElementById("imageLink").href = image.src;
  document.getElementById("enlarge").href = image.src;
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
render();
