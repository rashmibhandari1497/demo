console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () =>{
    const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);

    });
    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'))
    const addbutter = new Promise((resolve , reject)=> resolve('butter'))
    const getColdDrinks = new Promise((resolve,reject)=>resolve('coldDrinks'))
    let ticket = await promiseWifeBringingTicket;

    console.log(`wife : I have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife : I am hungry');
    
    let popcorn = await getPopcorn;
    console.log(`husband : I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife : I need a butter on my popcorn');

    let butter = await addbutter;
    console.log(`husband : I got some ${butter} on popcorn`);
    console.log('husband: anything else?');
    console.log('wife: I need cold drink')
    
    let coldDrinks = await getColdDrinks;

    console.log(`husband : I got ${coldDrinks}`)
    console.log('wife:lets go we are getting let')
    console.log('husband: Thankyou for the remainder');

    
    return ticket;

}
preMovie().then((m)=> console.log(`person3:shows ${m}`))
console.log('person4: shows ticket');
console.log('person5: shows ticket');