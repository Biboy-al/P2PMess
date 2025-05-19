import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BackendService } from '../../service/backend.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  clientNum : Number = 0;

  backend: BackendService = inject(BackendService);

  constructor(){
    this.clientNum = this .backend.connectPeer();
  }

}
