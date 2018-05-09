const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipient }, content) {
    super();

    this.from_email = new helper.Email("no-reply@hillView.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = recipient;

    this.addContent(this.body);
    this.addClickTracking();
  }
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
}

module.exports = Mailer;
