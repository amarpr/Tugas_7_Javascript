var tinggiBadan = [125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135]

for (i = 0; i < tinggiBadan.length; i++) {
    console.log(tinggiBadan[i] + " cm")
}

console.log("========================")

for (let x of tinggiBadan) {
    console.log(x + " cm, menggunakan for of")
}