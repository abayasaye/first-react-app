import getName from './main'

it("expect to return Abayneh Asaye",()=>{
    expect(getName()).toBe("Abayneh Asaye")
})

it("expect to return my name ",()=>{
    expect(getName()).not.toBe("asaye")
})