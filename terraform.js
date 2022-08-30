const {LineReader, StringReader } = require('./reader')

function parse(lines) {
    const r = new LineReader(lines)

    // Skip all the logging at the top
    r.consumeNonEmptyLines()

    // Consume empty lines
    r.consumeEmptyLines()

    if (r.peek().startsWith("No changes")) {
        return {
            status: 'ok',
            mutations: {},
            hasChanges: false,
            report: r.next()
        }

    } else if (r.peek().startsWith('Terraform used the selected')) {
        r.consumeNonEmptyLines()
        r.consumeEmptyLines()

        const report = r.captureUpUntilExcluding((l) => l.startsWith('Plan: ')).join("\n")

        const planStr = r.next();
        const sr = new StringReader(planStr.trim())
        sr.expect("Plan: ")

        const mutations = {}

        while (! sr.atEnd()) {
            const n = sr.captureNumber()
            sr.expect(' to ')
            const word = sr.captureKeyword()

            if (sr.peek() === ',') {
                sr.next()
                sr.consumeWhitespace()
            } else {
                sr.expect('.')
            }

            mutations[word] = n
        }

        return {
            status: 'ok',
            hasChanges: true,
            mutations,
            report
        }
    } else {
        return {
            status: 'failed',
            mutations: {},
            hasChanges: true,
            report: lines
        }
    }
}

module.exports = { parse }
