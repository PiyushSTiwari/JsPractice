console.log("hello")

arr = [1,2,3,4,5,6,7,8,9];

let sum = 0;

for(i=0; i<arr.length; i++){
    sum += arr[i];
}

console.log(sum);

sum = 0;

arr.forEach(element => {
    sum += element;
});

console.log(sum);

sum = 0;
function sumArr(num){
    sum += num;
};
arr.forEach(num => sumArr(num));
console.log(sum);



console.log("******************Array Methds*******************");


console.log("Push Method");
arr.push(10);
arr.push([11,12,13]);
console.log(arr)
console.table(arr);
console.log(arr[10][1]);

console.log("join Method");

console.log(arr.join());
console.log(arr.join("..."));

console.log("Map Method ");

square = arr.map(num => num*num);
console.log(square);


console.log("filter Method")

console.log(arr.filter(num => num%2==0));

console.log(arr.concat(square));

console.log(square.fill(5, 2, 5));

console.log(square.splice(10, 0, 1000));

// delete square[11];
// square.pop();

square.splice(11, 1);   // delete square[11]
console.log(square);


console.log(square.indexOf(1000));
console.log(square.slice(2, 5));

console.log(arr.toString());


console.log(arr.find( num => num*num === 100));
console.log(arr.indexOf(10));

console.log(arr.shift());
console.log(arr);

arr.unshift(1);
console.log(arr);




console.log("*********************OOP****************");




class Student{
    constructor(name, standard, rollNo){
        this.name = name;
        this.standard = standard;
        this.rollNo = rollNo;
    }

    setName(name){
        this.name = name;
    }
    setClass(standard){
        this.standard = standard;
    }
    setrollNo(rollNo){
        this.rollNo = rollNo;
    }
    getName(){
        return this.name;
    }
    getClass(standard){
        return this.standard;
    }
    getrollNo(rollNo){
        return this.rollNo;
    }
    toString(){
        return "name=" + this.name + " standard=" + this.standard + " RollNo=" + this.rollNo;
    }
}


let student1 = new Student();
student1.setName("Piyush");
console.log(student1.getName());
console.log(student1.getrollNo())

let student2 = new Student("Priya", 12, 1);
console.log(student2.getName());
console.log(student2.getrollNo())

console.log(student2);
console.log(student2.toString());