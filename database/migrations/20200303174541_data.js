exports.up = function(knex) {
    return knex.schema.createTable('data', data => {
      data.increments();
    
      data.integer("users_id").notNullable()
      data.foreign('users_id').references('users.id')

      data
        .string('name', 128)
        .notNullable()
      data.boolean("host_is_superhost").default(false).notNullable()
    
      data.float("latitude").notNullable()
      data.float("longitude").notNullable()
      data.integer('property_type', 4).notNullable()

      data.integer('accommodates').notNullable() //how many people it accomodates

      data.float('bathrooms').notNullable()

      data.integer('bedrooms', 8).notNullable()
      data.integer('room_type', 2).notNullable()
      data.integer('bed_type', 2).notNullable()
      data.float('size').notNullable()
      data.float('distance').notNullable() //distance from the berlin center
      data.float('security_deposit').notNullable()
      data.float('cleaning_fee').notNullable()
      data.integer('guests_included', 8).notNullable()
      data.float('extra_people').notNullable()//extra people fee
      data.integer('minimum_nights').notNullable()
      data.integer('cancellation_policy', 4).notNullable()

      data.boolean('tv').notNullable()
      data.boolean('wifi').notNullable()
      data.boolean('washer').notNullable()
      data.boolean('dryer').notNullable()
      data.boolean('kitchen').notNullable()
      data.boolean('heating').notNullable()
      data.boolean('free_parking').notNullable()
      data.boolean('smoking_allowed').notNullable()
      data.integer('neighbourhood', 11).notNullable()
      
      data.boolean('instant_bookable').notNullable()
      data.boolean('is_business_travel_ready').notNullable()
      data.float('price_estimate').notNullable().default(0)
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('data');
  };
  