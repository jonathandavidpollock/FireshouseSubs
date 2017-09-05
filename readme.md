# Overview of Application 

We have credited an api for purchasing items from Firehouse Subs. We are currently on Version 1 of this api. Through the collection of routes below you can create, read, update, and delete an order. You will need to use AJAX as some of the supported method types are not handled natively by browsers. See our documentation below to learn more.

## Local Install For Devlopers 

Set up for local development is easy. We use NPM as our package manager to maintain our packages. To install this application on your local machine, run the following commands. 

```git clone https://github.com/jonathandavidpollock/FireshouseSubs.git```

```cd FireshouseSubs```

```npm install```

```npm start```

We recommend installing the package nodemon to auto-refresh your browser after saving your files

If you have any issues, please submit an issue here on Github.

## Setup for a VPS
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante ultrices, feugiat metus et, luctus lectus. Nunc elementum pulvinar auctor. Praesent a nibh non libero porttitor laoreet tristique ut turpis. In hac habitasse platea dictumst. Nulla at condimentum orci, vel egestas libero. Integer fringilla placerat nisl, eget rhoncus magna interdum ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a odio libero. Nullam vehicula libero vel lorem lobortis feugiat. In ac nulla sit amet nunc sollicitudin fermentum. Etiam sed nisi orci. Duis tincidunt eu turpis eu semper. Donec sed scelerisque turpis. Fusce eu venenatis nibh, id posuere lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

## How to Operate the Application

### Routes

#### HTTP Request
##### Get
This is the route that needs to be hit to get all orders from the database. The example down below is what the data will look like for the return. 

`http://localhost:3000/api/v1/order`


``` 
[
    {
        "_id": "59aeb8c9cd2f6072acc0d86f",
        "__v": 0,
        "total_price": 1,
        "product_id": [
            {
                "_id": "59ac17689421581a6a87dc9b",
                "name": "Firehouse Meatball",
                "price": 1,
                "__v": 0
            }
        ]
    },
    {
        "_id": "59aeb8d5cd2f6072acc0d870",
        "__v": 0,
        "total_price": 1,
        "product_id": [
            {
                "_id": "59ac17689421581a6a87dc9b",
                "name": "Firehouse Meatball",
                "price": 1,
                "__v": 0
            },
            {
                "_id": "59ac17689421581a6a87dc9a",
                "name": "Smokehouse beef & cheddar brisket",
                "price": 1,
                "__v": 0
            }
        ]
    }
]
```
##### Get Order by Id
This route is getting an order by a single Id. The example down below is what the data will look like for the return. 

`http://localhost:3000/api/v1/order/:orderID`

`http://localhost:3000/api/v1/order/59aeb8c9cd2f6072acc0d86`


``` 
{
    "_id": "59aeb8c9cd2f6072acc0d86f",
    "__v": 0,
    "total_price": 1,
    "product_id": [
        {
            "_id": "59ac17689421581a6a87dc9b",
            "name": "Firehouse Meatball",
            "price": 1,
            "__v": 0
        }
    ]
}
```
##### Post

`http://localhost:3000/api/v1/order`

This route is to create a new order. To create a new order you need to add product items to the product\_id array. The product_id array is a field in the Order Schema. Here is a example down below.


To test if the api is working use [Postman](https://www.getpostman.com/). The product\_id is needed to create the order. You can add many product\_id's to one order. As you see below.

![postman post example](http://ibb.co/ei9XTa "Postman Post Example")

This should be the output after creating a new order as you can see in the picture above. In the picture above we added to products to the order. 

``` 
{
    "__v": 0,
    "_id": "59af09321dfab37fa2a6a4ca",
    "total_price": 2,
    "product_id": [
        "59ac17689421581a6a87dc9b",
        "59ac17689421581a6a87dc9b"
    ]
}
```
##### Put

`http://localhost:3000/api/v1/order/orderID`

This route is to update a order. All you need to do is pass the id of the order you want to update. For Example: 

`http://localhost:3000/api/v1/order/59af09321dfab37fa2a6a4ca`

You can also test this using [Postman](https://www.getpostman.com/). Below is a example of how to update a order in postman. We are using the same order as the one we just created. We are adding to more products to the order. The product\_id array now has 4 products in it.

![postman update example](http://ibb.co/f3uJZF "Postman Put Example")

##### Delete

`http://localhost:3000/api/v1/order/orderID`

This route is to delete a order. All you need to do is pass the id of the order you want to delete. For Example:
 
`http://localhost:3000/api/v1/order/59af09321dfab37fa2a6a4ca`

You can also test this using [Postman](https://www.getpostman.com/). Below is a example of how to delete a order in postman. We are using the same order as the one we just created and updated. We pass in the order id and send the request. We then get a response back for the a api `OK`. The order has now been deleted.

![postman delete example](http://ibb.co/cX9wMv "Postman Delete Example")



## Post Mortem
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante ultrices, feugiat metus et, luctus lectus. Nunc elementum pulvinar auctor. Praesent a nibh non libero porttitor laoreet tristique ut turpis. In hac habitasse platea dictumst. Nulla at condimentum orci, vel egestas libero. Integer fringilla placerat nisl, eget rhoncus magna interdum ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a odio libero. Nullam vehicula libero vel lorem lobortis feugiat. In ac nulla sit amet nunc sollicitudin fermentum. Etiam sed nisi orci. Duis tincidunt eu turpis eu semper. Donec sed scelerisque turpis. Fusce eu venenatis nibh, id posuere lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.