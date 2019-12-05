import { Component, OnInit } from '@angular/core';
import { Api } from '../Server/Api';
import {Fleets} from '../data/fleets';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})



export class FleetComponent implements OnInit {
    lstget:Fleets;
    constructor(private _Api:Api) { }
    LineChart=[];
    BarChart=[];
  

    ngOnInit() {

        // For Api Calling
        this._Api.getFleet()
            .subscribe
                (
                    data=>
                        {
                            this.lstget=data;
                            console.log(data)
                        }
                )
    
        //For LineChar for Alarm
        this.LineChart =new  Chart('Alarm',
                {
                    type:"bar",
      
                  data:{
                        labels:["18","17","16","18"],
                        datasets:[
                            {   
                            label: 'My First dataset',
                                backgroundColor:  'red',
                                borderColor: 'black',
                                data: [22, 10, 44, 23]
                            },
                            {
                                label: 'My First dataset',
                                backgroundColor: 'rgba(255,0,0,0.8)',
                                borderColor: 'black',
                                data: [32, 20, 64, 43]
                            },
                            {
                                label: 'My First dataset',
                                backgroundColor: '	#FFFF00',
                                borderColor: 'black',
                                data: [62, 30, 84, 72]

                            }

                                ],
                        
                        borderColor:"black",
                        fill:false,
                        Tension:0,
                        pointRadius:3 ,
                        
                        },
                    options:{ 
                        scales: 
                            {
                                xAxes: [
                                    {
                                        stacked: true
                                    }
                                        ],
                                yAxes: [
                                    {
                                        stacked: true,
                                        interval:1
                                    }
                                        ]
                            },
                        legend:
                            {
                                
                            display: false,
                            
                            },
                        title: 
                            {
                            display: false,
                            
                            }

                            } 
                    }
                                );
        // Distance Chart
        this.LineChart =new  Chart('Distance',{
            type:"line",
            data:
                {
                labels:["18","17","16","18"],
               
                datasets:
                    [
                        {
                       
                        data:
                            [
                                {y:40},
                                {y:20 },
                                {y:81 },
                                {y:60 }
                            ],
                            
                        backgroundColor:"red",
                        borderColor:"#00FFFF",
                        fill:false,
                        lineTension:0,
                        pointRadius:10 ,
                        
                        }
                    ]
                },
            options:{responsive: false,
                scales:
                    {
                    xAxes: [
                        {
                            
                            gridLines: 
                            {
                            offsetGridLines: true,
                            display: false
                            }
                        }   ],
                    yAxes: [
                        {
                            ticks: {
                            beginAtZero: true
                        },
                        gridLines: 
                            {
                                display: false
                            }
                        }             ]
                    },
                    legend: {
                        display: false,
                                                
                    }         
                    }
                    
                                                }
                                        );


        // fuel chart
        this.LineChart =new  Chart('Fuel',{
            type:"line",
            data:{
                    labels:["18","17","16","15"],
                    datasets:[
                        {
                            lable:"zxcczx",
                            data:[{y:30},
                                {y:25 },
                                {y:50 },
                                {y:65 }
                        ],
                            backgroundColor: '#FF8000',
                            borderColor: 'red',
                            Tension: 4,
                        
                        }   
                            ]
                },
            options:{
                responsive: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true,
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false,
                    
                }

            }
            
           
        });

        // Trip chart
        this.LineChart =new  Chart('trip',{
            type:"bar",
            exportEnabled: true,
            data:{
                
                labels:["18","17","16","18"],
                datasets:[
                    {
                        backgroundColor: '#FF1919',
                        borderColor: '',
                        data: [62, 30, 84, 72]
                    }
        
                    ],
                        
                        borderColor:"red;",
                        fill:false,
                        lineTension:0,
                        pointRadius:3 ,
                        
                    }
                
            ,
            options:{ scales: {
                xAxes: [{
                    stacked: false
                }],
                yAxes: [{
                    stacked: true,
                    interval:0
                }]
            },
            legend: {
                display: false,
                
            },
           
        
            }
        });

  }

}
