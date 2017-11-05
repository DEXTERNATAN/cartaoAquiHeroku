'use strict';

import { Component, OnInit } from '@angular/core';

export class Cartao {
	formaEnvio: string;
	formato: string;
	impressao: string;
	// Cores: string;
	papel: string;
	acabamento: string;
	enobrecimento: string;
	extras: string;
	formaEntrega: string;
	cep: string;
	localRetirada: string;
};

@Component({
	moduleId: module.id,
	selector: 'configCartaoComponente',
	styles: [`
  .router-link-active {
    text-decoration: underline;
  }
  `],
	templateUrl: './configCartao.component.html'
})
export class configCartaoComponente implements OnInit {

	public cartao: Cartao;
	public blEnviar: boolean = false;
	public entrega: boolean = true;
	public retirada: boolean = false;
	public tblFrete: boolean = false;

	constructor() {

		this.cartao = new Cartao();
		this.cartao.formato = "90 x 50 mm";
		this.cartao.impressao = "Frente e Verso";
		// this.cartao.Cores = "reciclato240g";
		this.cartao.papel = "Couché Fosco 300g";
		// this.cartao.acabamento = "Refile";
		this.cartao.enobrecimento = "Laminação Fosca";
		this.cartao.extras = "Sem Extras";
		this.cartao.formaEntrega = "entrega";
		this.cartao.cep = "72508502";
		this.cartao.localRetirada = "Brasilia";

	}

	ngOnInit() {
		console.log('Teste', this.cartao);
	}

	enviarArte(opcao: boolean){
		this.blEnviar = !this.blEnviar;
	}

	ativarEntrega(){
		this.retirada = false;
		this.entrega = true;
		this.tblFrete = false;
		console.log('Vai entregar');
	}

	ativarRetirada(){
		this.retirada = true;
		this.entrega = false;
		this.tblFrete = false;
		console.log('Vai retirar');
	}

	exibeFrete(){
		this.tblFrete = true;
	}

}
