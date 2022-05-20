//Function superhero returns an object
const superhero = () =>
{
    //object generates randomly your superpower, your sidekick and a villain
    const object = 
    {
        //Method yourSuperpower gives a random superpower 
        yourSuperpower()
        {   
            const superpowers = ['Accelerated Healing', 'Sonar','Night Vision', 'Wall Crawling', 'Controlling Machines', 'Plant Control', 'Super Speed', 'Healing Others', 'Unnatural Good Luck', 'Unbreakable Bones', 'Marksmanship', 'Teleportation', 'Underwater Breathing', 'Levitation', 'Producing Light', 'Super Sayan', 'Sharingan', 'Alchemy', 'Death Note', 'Stand: Star Platinum', 'Telekinesis', 'Elasticity', 'Mind Control', 'Electricity', 'Super Speed'];
            const randomPower = superpowers[Math.floor(Math.random()*superpowers.length)];
            return `Your superpower is: ${randomPower}`;
        },
        //Method generator, gives a random hero/villain
        generator() 
        {
            const array = ['Ant-Man','Aquaman','Asterix','The Atom','The Avengers','Batgirl','Batman','Batwoman','Black Canary','Black Panther','Captain America','Captain Marvel','Catwoman','Conan the Barbarian','Daredevil','The Defenders','Doc Savage','Doctor Strange','Elektra','Fantastic Four','Ghost Rider','Green Arrow','Green Lantern','Guardians of the Galaxy','Hawkeye','Hellboy','Incredible Hulk','Iron Fist','Iron Man','Marvelman','Robin','The Rocketeer','The Shadow','Spider-Man','Sub-Mariner','Supergirl','Superman','Teenage Mutant Ninja Turtles','Thor','The Wasp','Watchmen','Wolverine','Wonder Woman','X-Men','Zatanna','Zatara','Scarlet Witch','Uzumaki Naruto','Madara Uchiha','Sasuke Uchiha','Itachi Uchiha','Monkey D. Luffy','Roronoa Zoro','Goku','Vegeta','Darth Vader','Loki','The Joker','Hannibal Lecter','Kylo Ren','Voldemort','Harry Potter','Gollum','Sauron','Gandalf','Jotaro Kujo','Frodo','Agent Smith','Neo','Aizen','Dio','Meruem','Venom','Muzan','Donquixote Doflamingo'];
            const random =array[Math.floor(Math.random()*array.length)];
            return random;
        },
        //Method yourSidekick uses method generator to produce a random hero
        yourSidekick()
        {
            return `Your sidekick is: ${this.generator()}`;
        },
        //Method yourEnemy uses method generator to produce a random villain
        yourEnemy()
        {
            return `Your villain is: ${this.generator()}`;
        }    
    };
    return object;
};
const a = superhero();
console.log(a.yourSuperpower());
console.log(a.yourSidekick());
console.log(a.yourEnemy());
