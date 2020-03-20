import analyze from './arrayanalysis'

test("return average, min, max, length", () => {

    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })

    expect(analyze([10, 10, 10])).toEqual({
        average: 10,
        min: 10,
        max: 10,
        length: 3
    })
})