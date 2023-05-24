describe('terraform', () => {
    const tf = require('./terraform')

    it('should also work with plan output without cruft on the top', async () => {
        const {planOutputWithoutCruft} = require('./tests/terraform-output')
        const {
            status, hasChanges, mutations, report
        } = tf.parse(planOutputWithoutCruft.split("\n"));

        expect(status).toEqual("ok")
        expect(hasChanges).toBe(true)
        expect(mutations.add).toEqual(0)
        expect(mutations.change).toEqual(2)
        expect(mutations.destroy).toEqual(0)
    });


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
        expect(mutations.add).toEqual(2)
        expect(mutations.change).toEqual(7)
        expect(mutations.destroy).toEqual(0)
    });
})
