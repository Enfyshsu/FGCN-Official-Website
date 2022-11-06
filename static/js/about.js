async function init() {
    let data = JSON.parse(await readJsonFile("model/members.json"));
    await renderMemberCount(data["members"]);
}

function renderMemberCount(data) {
    let member_type = 0;
    data.forEach(element => {
        if (element.count) member_type++;
    });
    let curr_cnt = 0;
    let members = '<div class="row">';
    data.forEach(element => {
        if (element.count) {
            members += '<div class="col data-card">'
                + '<h3>' + element.count + '</h3>'
                + '<h4>' + element.type + '</h4></div>';
            curr_cnt++;
        }
        if (curr_cnt === parseInt(member_type / 2))
            members += '</div><div class="row">';
    });
    members += '</div>'
    $('#members').append(members);
}

$(".professor-photo").mouseover(function () {
    $(this).prevAll('.team-view').addClass('team-view-show');
});

$(".professor-photo").mouseleave(function () {
    $(this).prevAll('.team-view').removeClass('team-view-show');
});