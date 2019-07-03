
import * as moment from 'moment';

export class DataHoje {
  dia: string;
  diaSemana: string;
  mes: string;
  ano: string;

  constructor() {
    moment.locale('pt-br');
    this.setDataHoje();
  }

  private setDataHoje() {
    this.dia = moment().format('D');
    this.diaSemana = moment().format('dddd');
    this.mes = moment().format('MMMM');
    this.ano = moment().format('YYYY');
  }
}
