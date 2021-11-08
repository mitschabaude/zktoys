
let scalars = ["p"];
let arrays = ["G", "W", "cofactors"];
let arrayOfArrays = ["cosets"];
for (let key of scalars) {
  basis[key] = BigInt(basis[key]); 
}
for (let key of arrays) {
  basis[key] = basis[key].map(BigInt); 
}
for (let key of arrayOfArrays) {
  basis[key] = basis[key].map(a => a.map(BigInt)); 
}

export default basis;