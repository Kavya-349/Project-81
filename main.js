var list_of_names_array = [];

function submit() {
    document.getElementById("input_val").innerHTML = "";
    var name = document.getElementById("input_val").value;
    list_of_names_array.push(name);
    console.log(list_of_names_array);
    document.getElementById("display_names").innerHTML = list_of_names_array;
}
function shownames() {
    var remove_commas = list_of_names_array.join("");
    console.log(remove_commas);
    document.getElementById("display_show_names").innerHTML = remove_commas;
}
function sorted() {
    remove_commas.sort();
    console.log(remove_commas);
    document.getElementById("display_sort_names").innerHTML = sorted_val;
}