import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as echarts from 'echarts';

/**
 * Generated class for the BodyMassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-body-mass',
  templateUrl: 'body-mass.html',
})
export class BodyMassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BodyMassPage');
    var weight = echarts.init(document.getElementById("weight"));
    //体重
    var option = {
      title: {
        text: '近一年体重变化',
        x: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '体重值',
          type: 'line',
          smooth: true,
          stack: '总量',
          data: ['65.5', '64', '63', '61', '63.5', '65.2', '65.9', '66.5', '64.7', '63.9', '64.6', '65']
        }
      ]
    };
    weight.setOption(option);

    var treatment = echarts.init(document.getElementById("treatment"));
    var treatmentData = {
      title: {
        text: '近一年就诊统计',
        subtext: '总数' + 12 + "次",
        x: 'center'
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '就诊次数',
          type: 'line',
          smooth: true,
          stack: '总量',
          data: ['0', '1', '0', '0', '0', '1', '3', '1', '2', '0', '1', '1']
        }
      ]
    };
    treatment.setOption(treatmentData);

  }

}
