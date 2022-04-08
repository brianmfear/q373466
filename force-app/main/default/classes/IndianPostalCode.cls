public class IndianPostalCode {
    @AuraEnabled(cacheable=true)
    public static string getPostalCodeData(String postalCode) {
        if(postalCode?.length()!=6) {
            return '[]';
        }
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://api.postalpincode.in/pincode/'+postalCode);
        return new http().send(req).getBody();
    }
}