// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
/*
name: String
gender: String
age: int
email: string
favoriteColor: Array
isHavePet: String
education: Array
favoriteRestaurant: Set
*/

const firstUserFavResto = ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];
const secondUserFavResto = ['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'];

// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : 'Monica',
    gender : 'Female',
    age : 17,
    email : 'monica@dingdong.com',
    favoriteColor : ['Yellow', 'Pink', 'White', 'Purple'],
    isHavePet : 'Yes',
    education : [['name : SD 01', 'city : Jakarta', 'graduate : 2016'], ['name : SMP 02', 'city: Jakarta', 'graduate : 2019'], ['name : SMA 03', 'city : Tanggerang']],
    favoriteRestaurant : [...new Set(firstUserFavResto)]
};
const secondUser = {
    name : 'Wendy',
    gender : 'Male',
    age : 23,
    email : 'wendy@dingdong.com',
    favoriteColor : ['Blue', 'Black', 'Grey'],
    isHavePet : 'No',
    education : [['name : SD 02', 'city : Jakarta', 'graduate : 2010'],['name : SMP 03', 'city : Bogor', 'graduate : 2013'],['name : SMA 01', 'city : Surabaya', 'graduate : 2016'],['name : University Maju', 'city: Tanggerang']],
    favoriteRestaurant : [...new Set(secondUserFavResto)]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

//Push untuk menambahkan data kedalam array
users.push(firstUser);
users.push(secondUser); 

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};