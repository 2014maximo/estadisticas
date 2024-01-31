import { Component } from '@angular/core';
import { CLIENTES, SECTOR } from './constants/clientes.constant';
import { busquedaGeneral, copiarAlPortapapeles } from '../../constants/funciones.constant';
import { ClienteModel } from './models/clientes.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

	public clientes = CLIENTES;
	public sectores = SECTOR;
	public formFiltrado: FormGroup;
	public clipboard: string = '';

	constructor(private fb: FormBuilder) {
		this.formFiltrado = this.fb.group({
			barrio: [''] // Puedes establecer un valor predeterminado si lo deseas
		});
		this.sectores = this.ordenar(SECTOR);
		this.clientes = this.ordenar(CLIENTES);
	}

	private ordenar(grupo:any){
		return grupo.sort((a:any, b:any) => {
			const nombreA = a.nombre.toLowerCase(); // Convierte a minúsculas para ordenar sin distinguir mayúsculas y minúsculas
			const nombreB = b.nombre.toLowerCase();
		  
			if (nombreA < nombreB) {
			  return -1; // Si el nombre de 'a' es menor, lo coloca antes en el orden
			}
			if (nombreA > nombreB) {
			  return 1; // Si el nombre de 'b' es menor, lo coloca antes en el orden
			}
			return 0; // Si los nombres son iguales, no cambia el orden
		  });
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
		},500);
		this.formFiltrado.reset();
	}
	/**
	 * 
	 * @param cadenaAlclipboard
	 * Un objeto JSON es convertido en una cadena de texto a través de JSON.stringify
	 * Muestra utilidades muy diversas de la función JSON.stringify
	 */

	public copiarAlPortapapeles(cadenaAlclipboard: ClienteModel) {
		const jsonString = JSON.stringify(cadenaAlclipboard, null, 2);
		let limpiarCadena = jsonString.replace("{", "");
		limpiarCadena = limpiarCadena.replace("}", "");
		limpiarCadena = limpiarCadena.replace(/"/g, '');
		limpiarCadena = limpiarCadena.replace(/,/g, '');
		copiarAlPortapapeles(limpiarCadena);
	}

	busquedaSector(){
		this.clientes = CLIENTES.filter( e => e.barrio === this.formFiltrado.value.barrio);
	}
	

}
