async function init()
{
    let data = JSON.parse(await readJsonFile("model/publications.json"));
    await renderPublications(data["publications"]);
}

function renderPublications(data)
{
    var all_papers = '';
    data.forEach(element => {
        all_papers += '<div class="paper-topic">' + element.topic + '</div>';
        all_papers += '<ul>';
        var topic_papers = element.papers;
        topic_papers.forEach(paper => {
            all_papers += '<li>' + paper.authors + ', <b>'
                        + paper.title + '</b>, '
                        + paper.publisher + '</li>';
        });
        all_papers += '</ul>';
    });
    $("#paper-list").append(all_papers);
}