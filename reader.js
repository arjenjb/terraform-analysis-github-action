class Reader {
    constructor(stream) {
        this.stream = stream
        this.i = -1
    }

    assert(condition) {
        if (!condition) {
            throw "Assertion failed"
        }
    }

    peek() {
        return this.stream[this.i + 1]
    }

    peekN(n) {
        return this.stream.slice(this.i + 1, this.i + 1 + n)
    }


    next() {
        this.i++
        return this.stream[this.i]
    }

    nextN(n) {
        const slice =  this.stream.slice(this.i + 1, this.i + 1 + n)
        this.i += slice.length
        return slice
    }

    atEnd() {
        return this.stream.length === this.i + 1
    }

    upToEnd() {
        return this.stream.slice(this.i + 1)
    }

    remaining() {
        return this.stream.length - (this.i + 1)
    }
}

class LineReader extends Reader {
    consumeEmptyLines() {
        while (!this.atEnd() && this.peek().trim().length === 0) {
            this.next()
        }
    }

    consumeNonEmptyLines() {
        while (!this.atEnd() && this.peek().trim().length > 0) {
            this.next()
        }
    }

    captureUpUntilExcluding(func) {
        const mark = this.i

        while (!this.atEnd() && !func(this.peek())) {
            this.next()
        }

        return this.stream.slice(mark + 1, this.i)
    }
}

class StringReader extends Reader {
    expect(find) {
        if (!this.peekN(find.length) === find) {
            throw "Failed to parse string"
        } else {
            this.nextN(find.length)
        }
    }

    consumeWhitespace() {
        while (!this.atEnd() && /\s/.test(this.peek())) {
            this.next()
        }
    }

    captureNumber() {
        const mark = this.i + 1
        while (! this.atEnd() && /\d/.test(this.peek())) {
            this.next()
        }
        this.assert(mark < this.i + 1)
        return parseInt(this.stream.slice(mark, this.i + 1))
    }

    captureKeyword() {
        const mark = this.i + 1

        this.assert(/[a-z]/i.test(this.next()))

        while (! this.atEnd() && /[a-z0-9]/i.test(this.peek())) {
            this.next()
        }

        return this.stream.slice(mark, this.i + 1)
    }
}

module.exports = {
    LineReader,
    StringReader
}
