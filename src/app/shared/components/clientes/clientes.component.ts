import { Component } from '@angular/core';
import { CLIENTES } from './constants/clientes.constant';
import { busquedaGeneral, copiarAlPortapapeles } from '../../constants/funciones.constant';
import { ClienteModel } from './models/clientes.model';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

	public clientes = CLIENTES;
	public clipboard: string = '';

	constructor() {

	}

	public buscarTermino(e: any) {
		let busqueda = new ClienteModel();
		busqueda = busquedaGeneral(CLIENTES, 'nombre', e.srcElement.value)
		this.clientes = Object.assign([], busqueda);
	}

	public borrarBusqueda(e: any){
		setTimeout(()=>{
		  if(!e.srcElement.value){
			this.clientes = Object.assign([], CLIENTES);
		  }
		},500)
	}

	public copiarAlPortapapeles(cadenaAlclipboard: ClienteModel) {
		const jsonString = JSON.stringify(cadenaAlclipboard);
		copiarAlPortapapeles(jsonString);
	  }
	

}
