const input = document.getElementById('input');
const button = document.getElementById('button');

function handleImageClick(){
    input.select();
    document.execCommand('copy');
}
function handleButtonClick() {
    const x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*(){}[]<>?/";
    let randomPassword = '';
    for (let i = 0; i < 12; i++) {
        let randomPasswordGenerator = Math.floor(Math.random() * x.length);
        randomPassword += x.slice(randomPasswordGenerator, randomPasswordGenerator + 1);
    }
    input.value = randomPassword;
}


