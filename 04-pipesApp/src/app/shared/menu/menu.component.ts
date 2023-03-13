import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  items: MenuItem[] = [];

    ngOnInit():void {
        this.items = [
            {
               label: 'Pipes de Angular',
               icon: 'pi pi-desktop',
               items:[
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink: 'textos'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                    routerLink: 'numeros'
                },
                {
                    label: 'No Comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'no-comunes'
                }]
            },
            {
                label: 'Pipes Personalizados',
                icon: 'pi pi-cog',
                routerLink: 'ordenar'
            }

        ];
    }

}
