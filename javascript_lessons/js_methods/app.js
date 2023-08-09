const box = {
    width: 5,
    squre: function(height){
        return this.width * height;
    },
    cube: function(num){
        return num ** 3;
    }
}

console.log(box.width);

console.log(box.cube(5));

console.log(box.squre(3));

// this keyword

const cat = {
    name: 'Kitty',
    color: 'brown',

    getName() {
        return this.name;   
    }
}

console.log(cat.getName());
