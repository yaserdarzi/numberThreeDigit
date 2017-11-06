/* ONLY NUMBER */
function onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
/* END ONLY NUMBER */
/* NUMBER DIGIT */
function numberThreeDigit(Num) {
    Num += '';
    Num = Num.replace(/,/g, '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}
/* END NUMBER DIGIT */
var a = document.querySelectorAll('input[data-type]');

for (var i in a) if (a.hasOwnProperty(i)) {
    if (a[i].getAttribute('data-type') === "onlyNumber") {
        a[i].onkeypress = function () {
            return onlyNumber(event);
        }
    }
    if (a[i].getAttribute('data-type') === "numberThreeDigit") {
        a[i].onkeypress = function () {
            return onlyNumber(event);
        }
        a[i].onkeyup = function () {
            javascript:this.value = numberThreeDigit(this.value);
        }
    }
}
