import { Component, OnInit } from "@angular/core";

@Component({
    selector:'dashboard',
    templateUrl:'./dashboard-component.html',
    styleUrls:['./dashboard.css']
})
export class DashboardComponent implements OnInit {

    searchTermDeparture:string = "";
    searchTermDestination: string = "";
    destinationResults = new Array<any>();
    departureResults = new Array<any>();
    journeyType: number = 1;

    startDate = new Date();
    endDate = new Date();

    departureData = [
        {id:1, airportName: "Malpensa (MXP)", origin: "Italy"},
        {id:2, airportName: "Washinton Dc", origin: "USA"},
        {id:3, airportName: "New Delhi", origin: "India"},
        {id:4, airportName: "Hyderabad", origin: "India"},
        {id:5, airportName: "Banglore", origin: "India"},
        {id:6, airportName: "Dubai", origin: "Arab emirates"},
        {id:7, airportName: "Qatar", origin: "Qatar"},
        {id:8, airportName: "Kuwait", origin: "Kuwait"},
        {id:9, airportName: "Muscat", origin: "Oman"},
        {id:10, airportName: "Riadh", origin: "Saudia"},
        {id:11, airportName: "Jeddah", origin: "Saudia"},
        {id:12, airportName: "Sydney", origin: "Australia"},
        {id:13, airportName: "Toronto", origin: "Canada"}
    ]

    ngOnInit(){

    }

    searchDeparture() {
        if(this.searchTermDeparture.length < 2)
        {
            this.departureResults = [];
            return;
        }
        this.departureResults = this.departureData.filter((data) => {
            return data.airportName.toLowerCase().indexOf(this.searchTermDeparture.toLowerCase()) >= 0
            || data.origin.toLowerCase().indexOf(this.searchTermDeparture.toLowerCase()) >=0;
        });
    }

    searchDestination() {
        if(this.searchTermDestination.length < 2)
        {
            this.destinationResults = [];
            return;
        }
        this.destinationResults = this.departureData.filter((data) => {
            return data.airportName.toLowerCase().indexOf(this.searchTermDestination.toLowerCase()) >= 0
            || data.origin.toLowerCase().indexOf(this.searchTermDestination.toLowerCase()) >=0;
        });
    }

    selectedDestination(result: any) {
        this.searchTermDestination = result.airportName;
        this.destinationResults = [];
    }

    selectedDeparture(results: any) {
        this.searchTermDeparture = results.airportName;
        this.departureResults = [];
    }

    journeyTypeChange(type: number) {
        console.log(type);
    }
}