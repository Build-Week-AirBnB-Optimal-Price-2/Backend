AirBnB-Optimal-Pricing Backend

https://lambdaairbnb.herokuapp.com/

Please Check Frequently for updates

List of API detail. Note: Some of the routes are in progress!!!!

| Method        | Endpoint      | Description  |
| ------------- |:-------------:| -----:|
| GET      | /   | Shows a messaged that the api is up and running |
| POST     | /auth/register      |  creates a new user for the database  |
| POST | /auth/login      |   Signs up the new user and returns a token |
| GET | /data/all | grabs all of the data, this is used for testing and would not be in a final product. |
|POST | /data/input/:id | this is a massive post with many key value pairs. Be sure that no typos exist.
| GET | /data/output/:id | this is for getting all of the data for a specific user. Place the user id param in the :id section.
| PUT | /data/:id | The put request requires the id of the data table not the user.
| DELETE | /data/:id | The delete requires the id of the data table not the user.

example data input post: 

```javascript
{
	"name": "test1",
	"host_is_superhost": "false",
	"latitude": "20",
	"longitude": "30",
	"property_type":"4",
	"accommodates": "3",
	"bathrooms": "2",
	"bedrooms": "1",
	"room_type": "2",
	"bed_type": "1",
	"size": "40",
	"distance": "20",
	"security_deposit": "15",
	"cleaning_fee": "20",
	"guests_included": "3",
	"extra_people": "0",
	"minimum_nights": "3",
	"cancellation_policy": "1",
	"tv": "true",
	"wifi": "true",
	"washer": "false",
	"dryer": "false",
	"kitchen": "true",
	"heating": "true",
	"free_parking": "true",
	"smoking_allowed": "true",
	"neighbourhood": "0",
	"instant_bookable": "true",
	"is_business_travel_ready": "true"
}
```

note their are many restrictions on the data types and the maximum values for many users. Please see the DS team slack post for details on these restrictions.

```javascript
{
    "id": 1,
    "users_id": 1,
    "name": "test1",
    "host_is_superhost": "false",
    "latitude": 20,
    "longitude": 30,
    "property_type": 4,
    "accommodates": 3,
    "bathrooms": 2,
    "bedrooms": 1,
    "room_type": 2,
    "bed_type": 1,
    "size": 40,
    "distance": 20,
    "security_deposit": 15,
    "cleaning_fee": 20,
    "guests_included": 3,
    "extra_people": 0,
    "minimum_nights": 3,
    "cancellation_policy": 1,
    "tv": "true",
    "wifi": "true",
    "washer": "false",
    "dryer": "false",
    "kitchen": "true",
    "heating": "true",
    "free_parking": "true",
    "smoking_allowed": "true",
    "neighbourhood": 0,
    "instant_bookable": "true",
    "is_business_travel_ready": "true",
    "price_estimate": 0
}
```
example data for the /data/output/:id for id = 1