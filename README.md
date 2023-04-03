# Gateway Api


## Requirements:
  * `node >= v16`
  * `npm >= v8`

## Setup:
 *  Create an `.env` file by looking at the `env.example` file in the root of the project and setting the required parameters

 * Execute `npm install`

## Run:
 `npm run start`

#### for development mode:
 `npm run dev`

## Testing:
`npm run test`

## Build:
`npm run build`

## Endpoints:

```
Response Types:

 Status: 200 - Gateway

 Status: 400 - Any description error
```

### Retrieve all gateways
`GET: {SERVER}/api/gateway`

### Retrieve a gateways by ID
`GET: {SERVER}/api/gateway/:id`

### Create a gateway
`POST: {SERVER}/api/gateway`

#### Payload (example):

```    
{
  "gateway": {
    "name": "MyFirstGateway",
    "ipv4": "127.0.0.1",
    "associatedDevices": [
      {
        "vendor": "Apple",
        "status": true
      },
      {
        "vendor": "Asus",
        "status": false
      },
      {
        "vendor": "Lenovo",
        "status": true
      }
    ]
  }
}
```

### Update a gateway
`PATCH: {SERVER}/api/gateway`

#### Payload (example):
```    
{
  "gateway": {
    "_id": "6429a5a1b0d05142307fe732"
    "name": "MyFirstGateway",
    "ipv4": "127.0.0.1",
    "associatedDevices": [
      {
        "vendor": "Apple",
        "status": true
      }
    ]
  }
}
```

### Delete a gateway
`DELETE: {SERVER}/api/gateway/:id`