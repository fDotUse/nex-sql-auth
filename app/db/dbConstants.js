import path from 'path'

const dbConstants = {
  'config': path.resolve('./app/db/config', 'config.json'),
  'models-path': path.resolve('./app/db/models'),
  'seeders-path': path.resolve('./app/db/seeders'),
  'migrations-path': path.resolve('./app/db/migrations')
}

export default dbConstants
