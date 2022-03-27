

function unhide() {
    console.log("Running")
    if (document.getElementById("playername").value === "") return
    document.getElementById('playername').innerHTML = document.getElementById("playername").value
    document.getElementById('prompt2').style.removeProperty("display")
    if (document.getElementById("rivalname").value === "") return
    document.getElementById("prompt3").style.removeProperty("display")
}

function getGen() {
    let selection = document.querySelector('select');
    let result = document.querySelector('h4');
    console.log(selection.options[selection.selectedIndex].value);
    selection.addEventListener('change', () => {
        if (selection.options[selection.selectedIndex].value === "GEN1") {
            result.innerText = "Bulbasaur, Squirtle, Charmander"
        } else if (selection.options[selection.selectedIndex].value === "GEN2") {
            result.innerText = "Chikorita, Totodile, Cyndaquil"
        } else if (selection.options[selection.selectedIndex].value === "GEN3") {
            result.innerText = "Treecko, Mudkip, Torchic"
        }
    });
    /*POINT 4 missing maybe*/
}
