const sourceHtml = fs.readFileSync(path.join(process.cwd(), 'views/index.ejs'), 'utf8');
const $ = require("cheerio").load(sourceHtml);

describe('index.ejs', () => {
  it('Should add a log window `<div>` element. @index-add-log-window', () => {
    const divContainer = $('div[class="container"]')
    const divPanel = divContainer.children('div[class="panel panel-default"]')
    const logWindow = divPanel.children("#log-window")
    assert(logWindow.length > 0 && logWindow.hasClass("panel-body"), 'Have you added a `<div>` element with `panel-body` class and `log-window` id to `index.ejs`?')
    const text = logWindow.text()
    expect(text).to.include("No logs")
  });
})
