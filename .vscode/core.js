const time = 5000;
const step = 20;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Match.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
        t);
}
doll(1000, 'out-1');