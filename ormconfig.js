module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "logging": false,
   "synchronize": true,
   "entities": [
      __dirname + "dist/entity/**/*.js"
   ],
   "migrations": [
      __dirname + "dist/migration/**/*.{js,ts}"
   ],
   "subscribers": [
      __dirname + "dist/subscriber/**/*.{js,ts}"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   },
   "extra": {
      "ssl": true
   }
}