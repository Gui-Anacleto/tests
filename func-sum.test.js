const { sum, inOneHour } = require('./func-sum')

describe('funcoes de soma', () => {
   
    // SET O TERRENO, A BASE DO TESTE

        // beforeAll(() =>{
        //     console.log('before All, roda antes de tudo do describe')
        // })
        // beforeEach(() =>{
        //     console.log('before Each, roda antes de cada teste')
        // })
        // beforeEach(() =>{
        //     console.log('before Each, roda antes de cada teste')
        // })
        // afterAll(() =>{
        //     console.log('after All, roda depois de tudo, no fim')
        // })
        // afterEach(() =>{
        //     console.log('after Each, roda depois de cada teste')
        // })

    describe.skip('somas', () =>{
        it('soma 2 numeros', () => {
            expect(sum(1,3)).toBe(4)
        })
        it('soma 2 numeros', () => {
            expect(sum(1,3)).toBe(4)
        })
    })

    describe('tempo', () =>{
        it('retorna o timestamp daqui 1 hora', () => {
            const realDateNow = Date.now.bind(global.Date)
            //congela o tempo temporariamente para o teste
            //global.Date.now = () => 0 or
            global.Date.now = jest.fn(())
            expect(inOneHour()).toBe(3600000)
            global.Date.now = realDateNow
            console.log(global.Date.now())
        })
    })
})