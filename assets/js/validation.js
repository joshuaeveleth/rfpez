$.validator.addMethod('dotgovonly', function(value, element, param) {
  return value.match(new RegExp('.gov$', 'i')) || value.match(new RegExp('.mil$', 'i')) || value.match(new RegExp('.fed.us$', 'i'));
}, "Sorry, only government email addresses are allowed.");

$.validator.addMethod('urladdhttp', function(value, element) {
  if (this.optional(element)) {
    return true;
  } else {
    if (!/^(https?):\/\//i.test(value) && /(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)) {
      value = 'http://' + value;
      $(element).val(value);
    }
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
  }
}, 'Please enter a valid URL.');

$.validator.addMethod('sat_threshold', function(value, element, param) {
  return !value || (parseInt(value) < 150001);
}, "All projects inside of RFP-EZ are Simplified Acquisition Threshold projects. This means they can't exceed a total of $150,000.");

$.validator.setDefaults({
  ignore: []
});

$(document).on("ready page:load", function() {
  $("#change-password-form").validate_rfpez({
    rules: {
      "old_password": {
        required: true,
        minlength: 8
      },
      "new_password": {
        required: true,
        minlength: 8
      },
      "confirm_new_password": {
        equalTo: "#new-password-input"
      }
    }
  });
  $("#reset-password-form").validate_rfpez({
    rules: {
      "password": {
        required: true,
        minlength: 8
      }
    }
  });
  $("#new-project-form, #update-project-form").validate_rfpez({
    rules: {
      "project[title]": {
        required: true
      },
      "project[project_type_id]": {
        required: true
      }
    }
  });
  $("#edit-section-form").validate_rfpez({
    rules: {
      "project_section[title]": {
        required: true
      }
    }
  });
  $(".new-bid-form").validate_rfpez({
    rules: {
      "bid[approach]": {
        required: true
      },
      "bid[previous_work]": {
        required: true
      },
      "bid[employee_details]": {
        required: true
      },
      "total_price": {
        sat_threshold: true
      }
    }
  });
  $("#new-officer-form, .account-form-officer").validate_rfpez({
    rules: {
      "user[email]": {
        email: true,
        required: true,
        dotgovonly: true,
        remote: "/validation/email"
      },
      "officer[name]": {
        required: true
      },
      "officer[title]": {
        required: true
      },
      "officer[agency]": {
        required: true
      },
      "officer[phone]": {
        required: true
      }
    }
  });
  return $("#new-vendor-form, .account-form-vendor").validate_rfpez({
    rules: {
      "vendor[more_info]": {
        required: true
      },
      "vendor[homepage_url]": {
        required: true,
        urladdhttp: true
      },
      "vendor[portfolio_url]": {
        urladdhttp: true
      },
      "vendor[sourcecode_url]": {
        urladdhttp: true
      },
      "vendor[image_url]": {
        required: true,
        urladdhttp: true
      },
      "user[email]": {
        required: true,
        email: true,
        remote: "/validation/email"
      },
      "user[password]": {
        required: true,
        minlength: 8
      },
      "vendor[company_name]": {
        required: true
      },
      "vendor[contact_name]": {
        required: true
      },
      "vendor[address]": {
        required: true
      },
      "vendor[city]": {
        required: true
      },
      "vendor[state]": {
        required: true
      },
      "vendor[zip]": {
        required: true,
        digits: true
      }
    }
  });
});
