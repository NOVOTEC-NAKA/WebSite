function gerarFrase() {
    var fraseTag = document.getElementById("frase")
    var autorTag = document.getElementById("autor")
    var frases = [
        "A persistência é o caminho do êxito.",
        "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
        "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
        "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação."
    ]
    var autores = [
        "Charles Chaplin",
        "Zig Ziglar",
        "Dwight Eisenhower",
        "Dalai Lama"
    ]

    var num = Math.floor(Math.random()*frases.length)

    fraseTag.innerHTML = "\""+frases[num]+"\""
    autorTag.innerHTML = "-"+autores[num]
}