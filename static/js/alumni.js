async function init() {
    let data = JSON.parse(await readJsonFile("model/alumni.json"));
    await renderJobs(data["jobs"]);
}

function renderJobs(data) {
    let all_jobs = '';

    let academia = data['學界'];
    all_jobs += '<div class="alumni-type">學界</div><hr>';
    all_jobs += '<div class="row alumni-detail">';
    academia.forEach(element => {
        all_jobs += '<div class="col-6 col-md-6 col-lg-4">'
            + '<div class="alumni-name"><a href="' + element.link + '" target="_blank">' + element.name + '</a></div><hr>'
            + '<div class="alumni-company">' + element.school + '</div></div>';
    });
    all_jobs += '</div>';

    all_jobs += '<div style="padding: 1.5rem;"></div>';

    let industry = data['業界'];
    industry.sort(function(a, b) {
        return b.count - a.count;
    });
    all_jobs += '<div class="alumni-type">業界</div><hr>';
    all_jobs += '<div class="row alumni-detail">';
    industry.forEach(element => {
        all_jobs += '<div class="col-6 col-md-3 col-lg-2">'
            + '<div class="alumni-count">' + element.count + '</div><hr>'
            + '<div class="alumni-company">' + element.company + '</div></div>';
    });
    all_jobs += '</div>';

    $('#jobs-list').append(all_jobs);
}