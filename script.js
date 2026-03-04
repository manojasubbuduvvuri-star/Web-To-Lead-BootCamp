function beforeSubmit() {

    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");
    console.log("inputdate.value", inputDate.value); // string need to be converted to date -> en_IN

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
    console.log(outputDate.value);

}