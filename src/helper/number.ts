
class NumberHelper {
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     * @param Number min
     * @param Number max
     * @returns Number
     */
    getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}

export default new NumberHelper();
