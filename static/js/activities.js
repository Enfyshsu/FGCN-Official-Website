async function init() {
    let data = JSON.parse(await readJsonFile("model/activities.json"));
    await renderActivityImg(data["activities"]);
}

function renderActivityImg(data) {
    let images = '';
    images +=
        '<div class="carousel-item active" data-bs-interval="5000">'
        + '<img src="' + data[0].path + '" class="d-block w-100">'
        + '<div class="carousel-caption d-none d-md-block noselect">'
        + '<h5>' + data[0].label + '</h5>'
        + '</div> </div>';
    for (let i = 1; i < data.length; i++) {
        images +=
            '<div class="carousel-item data-bs-interval="5000">'
            + '<img src="' + data[i].path + '" class="d-block w-100">'
            + '<div class="carousel-caption d-none d-md-block noselect">'
            + '<h5>' + data[i].label + '</h5>'
            + '</div> </div>';
    }
    $("#carousel-inner").append(images);
}