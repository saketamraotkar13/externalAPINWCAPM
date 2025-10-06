@path: 'service/sdk'

service MyExternalNWService {

type Product {
    ID: Integer64;
    Name: String;
    Desc: String;
    Rating: Integer;
    Price: Decimal;
}
    
    function getNWProducts() returns array of Product;

}