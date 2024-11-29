const rules = require("../config/rules");

const evaluateChecklist = (data) => {
  return rules.map((rule) => {
    const passed = rule.validate(data);
    return {
      rule: rule.name,
      status: passed ? "Passed" : "Failed",
    };
  });
};

module.exports = evaluateChecklist;
