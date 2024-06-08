import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  cliente = new Cliente();

  tabela:boolean = true;

  // controle de botões
  btnCadastro:boolean = true;

  clientes:Cliente[] = []

  constructor(private servico:ClienteService){}

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno);
  }

  cadastrar():void{
    this.servico.cadastrar(this.cliente).subscribe(retorno => {
      this.clientes.push(retorno)
      this.cliente = new Cliente();
      alert('Cliente cadastrado com sucesso!');
    });
  }

  selecarCliente(codigo:number):void{
    this.clientes.forEach(c => {
      if (c.codigo === codigo) {
        console.log(codigo);
        this.cliente = c;
        return;
      }
    })

    this.btnCadastro = false;
    this.tabela = false;
  }

  editar():void{
    this.servico.editar(this.cliente).subscribe(retorno => {
      
      this.clientes.forEach((obj, index) => {
        if (obj.codigo === this.cliente.codigo){
          this.clientes[index] = this.cliente;
          return;
        }
      });

      /* Mesmo função do código acima
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      })
      this.clientes[posicao] = this.cliente;
      */

      this.cliente = new Cliente();
      alert('Cliente editado com sucesso!');
      this.tabela = true;
      this.btnCadastro = true;
    });
  }

  remover():void{
    this.servico.remover(this.cliente.codigo).subscribe(retorno => {

      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      })

      // remove do vetor
      this.clientes.splice(posicao, 1);

      this.cliente = new Cliente();
      alert('Cliente excluído com sucesso!');
      this.tabela = true;
      this.btnCadastro = true;

    })
  }

  cancelar():void {
    this.cliente = new Cliente();
    this.btnCadastro = true;
    this.tabela = true;
  }

  ngOnInit() {
    this.selecionar();
  }

}
