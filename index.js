const core = require('@actions/core');
const {parse} = require('./terraform')

try {
    const plan = core.getInput('plan');

    const {
        status, hasChanges, mutations, report
    } = parse(plan)

    core.setOutput("status", status);
    core.setOutput("hasChanges", hasChanges);
    core.setOutput("mutations", mutations);
    core.setOutput("report", report);
} catch (error) {
    core.setFailed(error.message);
}
