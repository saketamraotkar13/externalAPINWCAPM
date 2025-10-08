# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

## Steps
- Create Destination name like Northwind with URL: https://services.odata.org/v2/northwind/northwind.svc
- desclare function entity from odata srv which returns array in srv/schema.cds
- in schema.js file use sap-cloud-sdk/http-client (install using npm) using npm i @sap-cloud-sdk/http-client
- and consume detination in js file to call entity from external odata srv
- declare the btp destination services in mta file as dependency in require and resources as below:

## Destination to call odata/system
- Destination
  properties | property value
    -------|---------
  Name | NorthWind
  Type | HTTP
Description | northwinf
Proxy Type | Internet
URL | https://services.odata.org/v2/northwind/northwind.svc

- Additional Properties:
  properties | property value
  -------|---------
  WebIDEUsage | odata_gen
  WebIDEEnabled | true
  HTML5.DynamicDestination | true
  HTML5.Timeout | 60000

- requires:    
      - name: myorg-destination     "- mandatory to connect to odata service
      - name: myorg-connectivity    "- (only needed if its connecting to on-prem system via cloud connector)
- resources:
  - name: myorg-destination
    type: org.cloudfoundry.managed-service
    parameters:
      service: destination
      service-plan: lite
  - name: myorg-connectivity                    "- only needed when used on-prem odata srv
    type: org.cloudfoundry.managed-service
    parameters:
      service: connectivity
      service-plan: lite      
