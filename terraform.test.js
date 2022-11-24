describe('terraform', () => {
    const tf = require('./terraform')

    it('should figure out the right amount of mutations', async () => {
        const {planOutput} = require('./tests/terraform-output')
        const {
            status, hasChanges, mutations, report
        } = tf.parse(planOutput.split("\n"));

        expect(status).toEqual("ok")
        expect(hasChanges).toBe(true)
        expect(mutations.add).toEqual(9)
        expect(mutations.change).toEqual(0)
        expect(mutations.destroy).toEqual(0)
    });

    it('should not bork on local changes', async () => {
        const {planOutputWithLocalChanges} = require('./tests/terraform-output')
        const {
            status, hasChanges, mutations, report
        } = tf.parse(planOutputWithLocalChanges.split("\n"));

        expect(status).toEqual("ok")
        expect(hasChanges).toBe(true)
        expect(mutations.add).toEqual(9)
        expect(mutations.change).toEqual(0)
        expect(mutations.destroy).toEqual(0)
    });
})
