var express = require("express");
var app = express();
var jade = require("jade");
var pug = require("pug");
// var { convert: html2pug } = require("xhtml2pug");
var html2pug = require("html2pug");
var html2jade = require("html2jade");
var path = require("path");
//set view engine
app.set("view engine", "jade");

app.get("/favicon.ico", (req, res) => res.status(204));

// Note: File name and language code must same as in project.
// Open http://localhost:5000/fileName/langiageCode
app.get("/:name?/:lang?", function (req, res) {
  var template = req.params.name || "AccountInviteEmail";
  var language = req.params.lang || "ENG";
  const linkRegex = /<1>(.*?)<\/1>/g;
  const linkRegexExp = RegExp(/<1>(.*?)<\/1>/g);
  const html = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=0.8"><link href="https://fonts.googleapis.com/css?family=Lato&amp;display=swap" rel="stylesheet"><style>#container {     width: 800px;     margin: 0 auto;     background-color: #ffffff; } #header {     width: 600px;     padding: 25px 0 15px;     margin: 0 auto;     border-bottom: 1px solid #334750;     text-align: center; } #header img {     height: 40px;     width: 128px; } #content {     width: 600px;     margin: 0 auto 40px;     border-bottom: 1px solid #F8F9F9; } #content .name {     margin: 50px 0 30px; } #content p {     color: #334750;     font-family: 'Lato', sans-serif;     font-size: 18px;     line-height: 25px; } a.btn {     padding: 11px 13px;     text-decoration: none;     border-radius: 3px;     background-color: #334750;     color: #ffffff;     font-family: Lato, sans-serif;     font-size: 16px;     line-height: 27px; } a.btn:link, a.btn:visited, a.btn:active {     color: #ffffff; } #footer {     padding: 34px 100px;     background-color: #F8F9F9;     color: #637381;     font-family: 'Lato', sans-serif;     font-size: 14px;     line-height: 20px;     text-align: center; } @media screen and (max-width: 575px) {     #container {         width: 375px;     }     #header {         width: 335px;     }     #content {         width: 335px;     }     #content .name {         line-height: 40px;     }     #content P {         font-size: 16px;         line-height: 20px;     }     #footer {         padding: 34px 20px;         font-size: 16px;     } }</style></head><body><div id="container"><div id="header"><img src="https://stage-nora-science37.s3-us-west-2.amazonaws.com/public-email-assets/science37-logo-white.png" alt="logo"></div><div id="content"><p style="margin-top: 50px;">Ready to get started? First, we'll need to get you set up in our secure system to complete enrollment.<br><br><span>You will be prompted to set a password for your account. You can update your password in your account settings at a later time.</span></p><div style="text-align: center; margin: 60px 0;"><a href="#{linkURL}" class="btn">Complete now</a></div><p>If you would like assistance completing the enrollment process, feel free to reach out to us directly at &nbsp;<strong>recruitment@science37.com.</strong><br><br><span>If you didn't make this request, you can ignore this email.</span></p><p>Sincerely,<br><span>The Science 37 Team</span></p></div><div id="footer"><p>Please do not respond to this email, as this inbox is not monitored. This email was automatically sent to you by our system.<br></p><span>Science 37</span><div><br><a style="color: #637381; text-decoration: none;">Privacy Policy</a></div></div></div></body></html>`;
  function handleEmbeddedLinks(string, key) {
    const strings = string.split(linkRegex);
    let link = {};
    for (let n = 0; n < strings.length; n++) {
      link = {
        ...link,
        [`${key}_${n}`]: strings[n],
      };
    }
    return link;
  }
  // console.log(
  //   "html",
  //   jade.renderFile(path.join(__dirname, `./views/${template}.jade`), {
  //     linkURL: "sdadasd",
  //   })
  // );
  console.log(
    "html2pug(html, { fragment: html.toLowerCase().indexOf",
    html2pug(html, { fragment: html.toLowerCase().indexOf("<html") === -1 })
  );
  // console.log(
  //   "html",
  //   jade.render(
  //     html2pug(html, { fragment: html.toLowerCase().indexOf("<html") === -1 }),
  //     {
  //       // pretty: true,
  //       linkURL: "sdadasd",
  //     }
  //   )
  // );
  // const parsedHtml = html2pug(html);
  // const parsedHtmlJade = html2jade.convertHtml(html, {}, function (err, jade) {
  //   console.log(
  //     "html2",
  //     pug.render(parsedHtml, {
  //       linkURL: "sdadasd",
  //     })
  //   );
  //   // do your thing
  // });
  // console.log("parsedHtmlJade", parsedHtmlJade);
  // console.log("html2pug", parsedHtml);
  // console.log(
  //   "html2",
  //   pug.render(parsedHtml, {
  //     linkURL: "sdadasd",
  //   })
  // );
  res.render(template, {
    languageCode: language,
    subjectId: "<XXX>",
    sitenumber: "123456",
    firstname: "Stacy",
    lastname: "Whaley",
    header: "Your Password Has Been Updated",
    p2: "This email is to confirm your Science 37 Platform password has been changed. No further action is required at this time.",
    p3: "If you did not make this change, please contact a member of your clinical trial team.",
    ...handleEmbeddedLinks(
      "If you did not make this change, please contact our <1>support center</1>.",
      "p3"
    ),
    linkURL: "sdadasd",
    subject: "Your Password Has Been Reset",
  });
});

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
