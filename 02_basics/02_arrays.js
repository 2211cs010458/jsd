const heros = ["ram", "NTR", "Allu Arjun", "PSPK"]

const heroines = ["rashi", "Samantha" , "Shree lela", "Mamitha"]
heros.push(heroines)
console.log(heros);

const allactors = heros.concat(heroines);
console.log(heros);
console.log(allactors);

const all_new_actors = [...heros,...heroines]
console.log(all_new_actors);

