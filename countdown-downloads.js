function displayReleaseDate(value) {
  return value.split("-").reverse().join(".");
}

function renderDownloadReleases(releases) {
  ["firmware", "filesystem"].forEach(kind => {
    const available = releases.filter(release => release[kind]);
    if (!available.length) return;
    const current = available[0];
    const filename = current[kind].split("/").pop();
    document.getElementById(kind + "ReleaseVersion").textContent = current.version;
    document.getElementById(kind + "ReleaseName").textContent = filename;
    const date = document.getElementById(kind + "ReleaseDate");
    date.dateTime = current.date;
    date.textContent = displayReleaseDate(current.date);
    const download = document.getElementById(kind + "Download");
    download.href = current[kind];
    download.download = filename;

    const archive = document.getElementById(kind + "Archive");
    archive.replaceChildren();
    available.slice(1).forEach(release => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = release[kind];
      link.download = release[kind].split("/").pop();
      const version = document.createElement("strong");
      version.textContent = release.version;
      const name = document.createElement("span");
      name.className = "release-filename";
      name.textContent = link.download;
      const date = document.createElement("small");
      date.textContent = displayReleaseDate(release.date);
      link.append(version, name, date);
      item.append(link);
      archive.append(item);
    });
    document.getElementById(kind + "ArchiveEmpty").hidden = available.length > 1;
  });
}

fetch("countdown-releases.json", { cache: "no-store" })
  .then(response => {
    if (!response.ok) throw new Error("Release list unavailable");
    return response.json();
  })
  .then(data => renderDownloadReleases(data.releases))
  .catch(() => {});
