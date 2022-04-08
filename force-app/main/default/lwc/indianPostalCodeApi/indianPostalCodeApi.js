import { LightningElement, wire } from "lwc";
import getPostalCodeData from "@salesforce/apex/IndianPostalCode.getPostalCodeData";

export default class IndianPostalCodeApi extends LightningElement {
  pinCode;
  pinDetails = {};
  handlePinChange(event) {
    if (event.target.value?.length === 6) {
      this.pinCode = event.target.value;
    }
  }
  @wire(getPostalCodeData, { postalCode: "$pinCode" })
  handlePostalCodeDataChange(response) {
    if (response.data) {
      const data = JSON.parse(response.data);
      this.pinDetails = data[0] || data;
    }
  }
}