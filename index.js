const core = require('@actions/core');
const {parse} = require('./terraform')

try {
    const plan = core.getInput('plan');
    console.debug("Plan input: ", plan)

    const {
        status, hasChanges, mutations, report
    } = parse(plan)

    console.debug("Status: ", status)
    console.debug("Changes: ", hasChanges)
    console.debug("Mutations: ", mutations)

    core.setOutput("status", status);
    core.setOutput("hasChanges", hasChanges);
    core.setOutput("mutations", mutations);
    core.setOutput("report", report);
} catch (error) {
    core.setFailed(error.message);
}
