const request = require('supertest')
const server = require('../api/server')

const db = require('../database/dbConfig')

const DataTable = require('../data/data-model')



describe('data router', function(){

    it('should run the tests', function(){
        expect(true).toBe(true)
    })

    describe('addData()', ()=>{

        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('data').truncate();
          });
    
    it('should insert the data route', async()=>{

        await DataTable.addData({name: "test2",
        host_is_superhost: true,
        latitude: 20,
        longitude: 50,
        property_type: 4,
        accommodates: 3,
        bathrooms: 2,
        bedrooms: 1,
        room_type: 2,
        bed_type: 1,
        size: 40,
        distance: 20,
        security_deposit: 15,
        cleaning_fee: 20,
        guests_included: 3,
        minimum_nights: 3,
        cancellation_policy: 1,
        extra_people: 0,
        tv: true,
        dryer: true,
        wifi: true,
        washer: false,
        kitchen: true,
        heating: true,
        free_parking: true,
        smoking_allowed: true,
        neighbourhood: 0,
        instant_bookable: true,
        is_business_travel_ready: true,
        price_estimate: 0}, 1)

        await DataTable.addData({name: "test3",
        host_is_superhost: true,
        latitude: 20,
        longitude: 50,
        property_type: 4,
        accommodates: 3,
        bathrooms: 2,
        bedrooms: 1,
        room_type: 2,
        bed_type: 1,
        size: 40,
        distance: 20,
        security_deposit: 15,
        cleaning_fee: 20,
        guests_included: 3,
        minimum_nights: 3,
        cancellation_policy: 1,
        extra_people: 0,
        tv: true,
        dryer: true,
        wifi: true,
        washer: false,
        kitchen: true,
        heating: true,
        free_parking: true,
        smoking_allowed: true,
        neighbourhood: 0,
        instant_bookable: true,
        is_business_travel_ready: true,
        price_estimate: 0}, 1)


    const data = await db('data')

    expect(data).toHaveLength(2)
    })
})
})