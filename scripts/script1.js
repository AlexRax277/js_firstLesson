while (true) {
    let randomNumber = Math.floor(Math.random() * 1000);
    let inputNumber = prompt('Введите целое число: ');
    console.log(`Рандомное число - ${randomNumber}`);
    console.log(`Введенное число - ${inputNumber}`);
    if (inputNumber === 'q') {
        alert('До свидания!');
        break;
    }
    if (isNaN(inputNumber)) {
        alert('Так не пойдёт!');
    } else if (randomNumber === inputNumber) {
            alert('Вы угадали!');
    } else if (randomNumber > inputNumber) {
            alert('Ваше число меньше.');
    } else {
            alert('Ваше число больше.');
    }       
}