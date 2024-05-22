
import { Hotel } from '../models/hotel.model';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { HotelApiService } from '../services/hotel-api.service';
import { Utilisateur } from '../models/utilisateur.model';



@Component({
  selector: 'ngx-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent {}
//   options: any = {};
//   themeSubscription: any;
// Hotel: Hotel[];
// Utilisateur: Utilisateur;
//   constructor(private theme: NbThemeService,
//     private HotelService: HotelApiService,)
//      {
//   }
//   ngOnInit(): void {

//       this.findHotel();

//   }

//   setBarData(xAxisData: string[], seriesData:string[]) {
//     console.log(seriesData)
//     this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

//       const colors: any = config.variables;
//       const echarts: any = config.variables.echarts;

//       this.options = {
//         backgroundColor: echarts.bg,
//         color: [colors.primaryLight],
//         tooltip: {
//           trigger: 'axis',
//           axisPointer: {
//             type: 'shadow',
//           },
//         },
//         grid: {
//           left: '3%',
//           right: '4%',
//           bottom: '3%',
//           containLabel: true,
//         },
//         xAxis: [
//           {
//             type: 'category',
//             data: xAxisData,
//             axisTick: {
//               alignWithLabel: true,
//             },
//             axisLine: {
//               lineStyle: {
//                 color: echarts.axisLineColor,
//               },
//             },
//             axisLabel: {
//               textStyle: {
//                 color: echarts.textColor,
//               },
//             },
//           },
//         ],
//         yAxis: [
//           {
//             type: 'value',
//             axisLine: {
//               lineStyle: {
//                 color: echarts.axisLineColor,
//               },
//             },
//             splitLine: {
//               lineStyle: {
//                 color: echarts.splitLineColor,
//               },
//             },
//             axisLabel: {
//               textStyle: {
//                 color: echarts.textColor,
//               },
//             },
//           },
//         ],
//         series: [
//           {
//             name: 'Score',
//             type: 'bar',
//             barWidth: '60%',
//             data: seriesData,
//           },
//         ],
//       };
//     });
//   }




//   findHotel() {
//     this.HotelService.findAllActive().subscribe(val =>{
//       console.log(this.Hotel);
//       let xAxisData: string[]= [];
//       let seriesData:string[]= [];
//       this.Hotel.forEach(element => {
//         xAxisData.push(element?.Hotel?.nom);
//         seriesData.push(element?.Utilisateur?.length);
//       })
//       this.setBarData(xAxisData, seriesData);
//     })

//   }
// }
