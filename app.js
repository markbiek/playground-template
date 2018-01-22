(function ($) {
    $(document).ready(() => {
        console.log('ready!');
    });
})(jQuery);

function* counter() {
    let idx = 0;

    while (true) {
        yield idx++;
    }
}

let gen = counter();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
