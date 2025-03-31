const pronounList = ['the', 'our'];
const adjectiveList = ['great', 'big'];
const nounList = ['jogger', 'racoon'];
const extensionList = ['.com', '.net', '.us', '.io', '.es'];

document.getElementById("generate-button").addEventListener("click", generateDomains);

function generateDomains() {
  const domainListElement = document.getElementById("domain-list");
  domainListElement.innerHTML = "";

  for (let pronoun of pronounList) {
    for (let adjective of adjectiveList) {
      for (let noun of nounList) {
        for (let extension of extensionList) {
          const domain = pronoun + adjective + noun + extension;
          const listItem = document.createElement("li");
          listItem.textContent = domain;
          domainListElement.appendChild(listItem);

          const extText = extension.replace('.', '');
          if (noun.endsWith(extText)) {
            const hacked = pronoun + adjective + noun.replace(extText, '') + '.' + extText;
            const hackItem = document.createElement("li");
            hackItem.textContent = "💡 " + hacked;
            domainListElement.appendChild(hackItem);
          }
        }
      }
    }
  }
}