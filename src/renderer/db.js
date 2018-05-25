import sqlite3 from 'sqlite3'
import fs from 'fs'

class DB {
  initDB = () => {
    try {
      fs.mkdirSync('./data')
    } catch (e) {
      if (e.code !== 'EEXIST') {
        return
      }
      console.log(e)
    }

    this.db = new sqlite3.Database('data/PPic.db')

    this.db.run('select * from images limit 0,1', (err) => {
      if (err === null || err.code !== 'SQLITE_ERROR') {
        return
      }
      this.db.run('CREATE TABLE [images] (id integer PRIMARY KEY AUTOINCREMENT UNIQUE, ' +
        'filename varchar DEFAULT 未命名,url varchar NOT NULL,width integer,height integer,' +
        'storeType varchar NOT NULL, create_at timestamp NOT NULL,update_at timestamp)')
    })

    this.db.run('select * from config limit 0,1', (err) => {
      if (err === null || err.code !== 'SQLITE_ERROR') {
        return
      }
      this.db.run('CREATE TABLE [config] (id integer PRIMARY KEY AUTOINCREMENT UNIQUE, ' +
        'storeType varchar NOT NULL,accessKey varchar NOT NULL,secretKey  varchar NOT NULL, bucket varchar,' +
        'origin varchar,url varchar, create_at timestamp NOT NULL,update_at timestamp)')
    })
  }
}

export default new DB()
