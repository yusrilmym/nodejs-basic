const initialMemoryUsage = 5339648;// TODO 1
const yourName = process.argv[2];// TODO 2
const environment = process.env.NODE_ENV;// TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = 5339648;// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// const server = new Server({
//     host: process.env.NODE_ENV !== 'development' ? 'localhost' : 'dicoding.com',
// });