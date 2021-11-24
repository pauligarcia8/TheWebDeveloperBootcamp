# Section 18: Object Literal
## Objects
- Object are collections of properties.
- Properties are key-value pair.
- Rather than accesing data using an index, we use custom keys.
### Accesing data out of objects
const person = {sex: 'female', age: 28, country: 'Argentina'};
to acces to age we use: person.age or person['age'].
> All keys are converted as string
const years = {1999: 'GOOD', 2020: 'BAD'}
the key 1999 is converted to string, so to acces we use years.1999. 
```
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address + restaurant.city + restaurant.state + restaurant.zipcode}`;
```