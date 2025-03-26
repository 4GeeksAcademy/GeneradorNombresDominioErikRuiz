const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extensions = ['.com', '.net', '.us', '.io', '.es'];

function generarDominios() {
  const lista = document.getElementById("dominios");
  lista.innerHTML = "";

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          const dominio = p + a + n + ext;
          const item = document.createElement("li");
          item.textContent = dominio;
          lista.appendChild(item);

          if (n.endsWith(ext.replace('.', ''))) {
            const hack = p + a + n.replace(ext.replace('.', ''), '') + '.' + ext.replace('.', '');
            const hackItem = document.createElement("li");
            hackItem.textContent = "💡 " + hack;
            lista.appendChild(hackItem);
          }
        }
      }
    }
  }
}