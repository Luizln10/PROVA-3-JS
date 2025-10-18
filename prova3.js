let nomes = []

while (true) {
    let nome = prompt("Digite um nome (ou 'sair'):")
    if (nome.toLowerCase() === "sair") break
    nomes.push(nome)
}

for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}: ${nomes[i]}`)
}

for (let nome of nomes) {
    alert(`Bem-vindo(a), ${nome}!`)
}
