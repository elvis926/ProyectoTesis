import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionuserService } from 'src/app/services/gestionuser.service';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component implements OnInit {

  formSolicitud = new FormGroup({
    descripcionPC: new FormControl ('',[Validators.required, Validators.maxLength(100)]),
    fechaIni:new FormControl ('2021-09-01',[Validators.required]),
    fechaFin: new FormControl ('2021-09-01',[Validators.required]),
    dano: new FormControl ('',[Validators.required]),
    descripcion: new FormControl ('',[Validators.required]),
  })

  constructor(
    private usuarios: GestionuserService,
  ) { }

  ngOnInit(): void {
  }

  publicSolicitud(){
    this.usuarios.solicitarServicio(this.formSolicitud.value).subscribe(
      result=>{
        console.log(result);
        this.formSolicitud.reset();
        
      }
    )

  }

}
