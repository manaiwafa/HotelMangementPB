import { Utilisateur } from './../models/utilisateur.model';
import { Component, OnInit } from '@angular/core';

import { ADMIN_MENU_ITEMS, MENU_ITEMS, Femme_Mengae_MENU_ITEMS, Receptionniste_MENU_ITEMS, Chef_Chambre_MENU_ITEMS, MAGASINIER_MENU_ITEMS, BUINDIER_MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  user: Utilisateur = JSON.parse(localStorage.getItem('user'));
  menu = [];


  ngOnInit(): void {
    if(this.user.role=="Admin hotel") {
      this.menu = MENU_ITEMS;
    }else if(this.user.role=="Admin") {
      this.menu = ADMIN_MENU_ITEMS;
    }else if(this.user.role=="femme_menage") {
      this.menu =  Femme_Mengae_MENU_ITEMS;
    }else if(this.user.role=="receptionniste"){
      this.menu = Receptionniste_MENU_ITEMS;
    }else if(this.user.role=="chef_chambre"){
      this.menu = Chef_Chambre_MENU_ITEMS;
    }else if(this.user.role=="magasinier"){
      this.menu = MAGASINIER_MENU_ITEMS;
    }else if(this.user.role=="buindier"){
      this.menu = BUINDIER_MENU_ITEMS;
    }

  }
}
