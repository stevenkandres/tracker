const brokerCB = document.querySelector("input[name=broker-cb]")
const commCB = document.querySelector("input[name=comm-cb]")
const brokerGroup = document.getElementById('broker-grp');
const commGroup = document.getElementById('comm-grp');

brokerCB.addEventListener('change', function() {
    brokerGroup.classList.toggle('hidden');
    if (this.checked) {
        console.log("Checked!");
    } else {
        console.log("not checked");
    }
});

commCB.addEventListener('change', function() {
    commGroup.classList.toggle('hidden');
    if (this.checked) {
        console.log("Checked!");
    } else {
        console.log("not checked");
    }
});