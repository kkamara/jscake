# JS Cake

Typescript & react app displaying cakes.

## Requirements

- [npm](https://nodejs.org/en/)
- [mysql](https://www.mysql.com/)


## Setup

Setting your environment variables.

```bash
# Be sure to set DB_URI to your mysql connection string
cp .env.example .env
# Install our app dependencies
npm install
# Run db migrations
npm run migrate -- up
```

## Usage

```bash
npm start
```

## Development mode

```bash
npm run dev
```

## Testing

```bash
npm run test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause/)
