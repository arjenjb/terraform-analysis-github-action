const {LineReader, StringReader } = require('./reader')

function parse(lines) {
    const r = new LineReader(lines)
    const prefix = []

    // Skip the cruft
    while (! r.atEnd()) {
        const p = r.peek()
        if (p.startsWith("No changes")
            || p.startsWith("Terraform used the selected")
            || p.startsWith("Note: ")
        ) {
            break
        }

        // skip it
        r.next()
    }

    // Find the notes
    while (! r.atEnd()) {
        const p = r.peek()
        if (p.startsWith("No changes")
            || p.startsWith("Terraform used the selected")) {
            break
        }

        prefix.push(r.next())
    }

    top = r.peek()
    if (top.startsWith("No changes")) {
        return {
            status: 'ok',
            mutations: {},
            hasChanges: false,
            report: prefix.join("\n") + r.next()
        }
    }

    if (top.startsWith('Terraform used the selected') || (r.peek().startsWith('Note: '))) {
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
            report: prefix.join("\n") + report
        }
    } else {
        return {
            status: 'failed',
            mutations: {},
            hasChanges: true,
            report: lines.join("\n")
        }
    }
}

module.exports = { parse }
