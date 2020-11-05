//object property shorthand

const name = 'Jim';
const age = 29;

const user = {
    name,
    age,
    location: 'Brisbane'
};
user.sex = 'male';

console.log(user);

//object destructuring
const product = {
    label: 'notebook',
    price: 300,
    stock: 2,
    salePrice: undefined
};

const {
    label: productlabel,
    stock,
    rating = 5 //default value, will be overwrite if that value exist
} = product;
//equal to const productlabel = product.label    

const transaction = (type, {
    label,
    stock
}) => console.log(type, label, stock);

transaction('order', product);